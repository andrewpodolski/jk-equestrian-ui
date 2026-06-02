"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { siteNavItems, siteNavMessageId } from "@/config/siteNav";
import { localizePath, stripLocaleFromPathname } from "@/i18n/routing";

export function Nav() {
  const pathname = usePathname();
  const { formatMessage, locale } = useIntl();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const basePath = stripLocaleFromPathname(pathname);
  const isHome = basePath === "/";

  // Close hamburger on route change (defer setState — sync setState in effects is disallowed by eslint)
  useEffect(() => {
    const id = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const links = siteNavItems.map(({ path, labelKey }) => ({
    href: localizePath(path, locale),
    path,
    label: formatMessage({ id: siteNavMessageId(labelKey) }),
  }));

  const solid = !isHome || scrolled;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300",
        solid
          ? "bg-blue-dark/[0.97] backdrop-blur-sm py-4 px-10 lg:px-16"
          : "bg-transparent py-6 px-10 lg:px-16",
      ].join(" ")}
    >
      {/* Logo */}
      <Link
        href={localizePath("/", locale)}
        className="font-serif text-2xl font-semibold text-cream tracking-[0.06em] no-underline shrink-0"
      >
        RK<span className="text-gold">Warszawa</span>
      </Link>

      {/* Desktop nav + language switcher */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        <ul className="flex gap-8 lg:gap-10 list-none">
          {links.map(({ href, path, label }) => (
            <li key={path}>
              <Link
                href={href}
                className={[
                  "text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-colors duration-200",
                  basePath === path
                    ? "text-gold-light"
                    : "text-cream/80 hover:text-gold-light",
                ].join(" ")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex md:hidden flex-col justify-center gap-[5px] w-9 h-9 p-1 bg-transparent border-none cursor-pointer"
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className={[
            "block w-[22px] h-[1.5px] bg-cream rounded transition-transform duration-300 origin-center",
            menuOpen ? "translate-y-[6.5px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-[22px] h-[1.5px] bg-cream rounded transition-all duration-300",
            menuOpen ? "opacity-0 scale-x-0" : "",
          ].join(" ")}
        />
        <span
          className={[
            "block w-[22px] h-[1.5px] bg-cream rounded transition-transform duration-300 origin-center",
            menuOpen ? "-translate-y-[6.5px] -rotate-45" : "",
          ].join(" ")}
        />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 flex flex-col bg-blue-dark/[0.98] backdrop-blur-sm border-t border-gold/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] px-6 py-8 gap-6 md:hidden">
          {links.map(({ href, path, label }) => (
            <Link
              key={path}
              href={href}
              className={[
                "text-[0.88rem] tracking-[0.14em] uppercase no-underline transition-colors duration-200",
                basePath === path
                  ? "text-gold-light"
                  : "text-cream/85 hover:text-gold-light",
              ].join(" ")}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="w-fit pt-4 border-t border-gold/15">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
