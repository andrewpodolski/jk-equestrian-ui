"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export function Nav() {
  const pathname = usePathname();
  const { formatMessage } = useIntl();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close hamburger on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: formatMessage({ id: "nav.home" }) },
    { href: "/horses", label: formatMessage({ id: "nav.horses" }) },
    { href: "/facilities", label: formatMessage({ id: "nav.facilities" }) },
    { href: "/team", label: formatMessage({ id: "nav.team" }) },
    { href: "/contact", label: formatMessage({ id: "nav.contact" }) },
  ];

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
        href="/"
        className="font-serif text-2xl font-semibold text-cream tracking-[0.06em] no-underline shrink-0"
      >
        JK<span className="text-gold">Warszawa</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 lg:gap-10 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={[
                "text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-colors duration-200",
                pathname === href
                  ? "text-gold-light"
                  : "text-cream/80 hover:text-gold-light",
              ].join(" ")}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
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
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "text-[0.88rem] tracking-[0.14em] uppercase no-underline transition-colors duration-200",
                pathname === href
                  ? "text-gold-light"
                  : "text-cream/85 hover:text-gold-light",
              ].join(" ")}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
