"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath, getLocaleFromPathname } from "@/i18n/routing";
import { siteNavItems } from "@/config/siteNav";
import { SITE_GOOGLE_MAPS_URL } from "@/config/siteContact";
import enMessages from "@/i18n/messages/en.json";
import plMessages from "@/i18n/messages/pl.json";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const messages = locale === "en" ? enMessages : plMessages;
  const m = messages.footer;
  const nav = messages.nav;

  const exploreLinks = siteNavItems.map(
    ({ path, labelKey }) => [path, nav[labelKey]] as const,
  );

  const { info } = messages.contact;
  const addressDisplay = info.address.value.replace(/\n/g, ", ");
  const contactItems: {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  }[] = [
    {
      label: info.address.label,
      value: addressDisplay,
      href: SITE_GOOGLE_MAPS_URL,
      external: true,
    },
    {
      label: info.phone.label,
      value: info.phone.value,
      href: `tel:${info.phone.value.replace(/\s/g, "")}`,
    },
    {
      label: info.phone2.label,
      value: info.phone2.value,
      href: `tel:${info.phone2.value.replace(/\s/g, "")}`,
    },
    {
      label: info.email.label,
      value: info.email.value,
      href: `mailto:${info.email.value}`,
    },
    {
      label: info.hours.label,
      value: `${info.hours.weekdays} ${info.hours.weekdayHours} / ${info.hours.weekend} ${info.hours.weekendHours}`,
    },
  ];

  const linkClassName =
    "text-[0.85rem] text-cream/55 font-light no-underline transition-colors duration-200 hover:text-cream";

  return (
    <footer className="bg-blue-dark px-10 lg:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-12 pb-12 border-b border-gold/15">
        <div>
          <Link
            href={localizePath("/", locale)}
            className="font-serif text-[1.6rem] font-semibold text-cream no-underline block mb-3"
          >
            RK<span className="text-gold">Warszawa</span>
          </Link>
          <p className="text-[0.85rem] text-cream/40 leading-[1.75] font-light">
            {m.desc}
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-5">
            {m.explore}
          </p>
          <ul className="flex flex-col gap-[0.6rem] list-none">
            {exploreLinks.map(([path, label]) => (
              <li key={path}>
                <Link
                  href={localizePath(path, locale)}
                  className="text-[0.85rem] text-cream/45 hover:text-cream no-underline transition-colors duration-200 font-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-5">
            {m.contact}
          </p>
          {contactItems.map((item) => (
            <div key={item.label} className="flex flex-col mb-3">
              <span className="text-[0.65rem] tracking-[0.14em] uppercase text-cream/30 mb-[0.15rem]">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className={linkClassName}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-[0.85rem] text-cream/55 font-light">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[0.75rem] text-cream/25">{m.copyright}</p>
        <p className="text-[0.75rem] text-cream/25">{m.tagline}</p>
      </div>
    </footer>
  );
}
