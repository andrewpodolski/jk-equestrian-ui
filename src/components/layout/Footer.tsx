"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath, getLocaleFromPathname } from "@/i18n/routing";
import { siteNavItems } from "@/config/siteNav";
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
          {(
            [
              [
                messages.contact.info.address.label,
                messages.contact.info.address.value.replace(/\n/g, ", "),
              ],
              [
                messages.contact.info.phone.label,
                messages.contact.info.phone.value,
              ],
              [
                messages.contact.info.phone2.label,
                messages.contact.info.phone2.value,
              ],
              [
                messages.contact.info.email.label,
                messages.contact.info.email.value,
              ],
              [
                messages.contact.info.hours.label,
                `${messages.contact.info.hours.weekdays} ${messages.contact.info.hours.weekdayHours} / ${messages.contact.info.hours.weekend} ${messages.contact.info.hours.weekendHours}`,
              ],
            ] as [string, string][]
          ).map(([label, val]) => (
            <div key={label} className="flex flex-col mb-3">
              <span className="text-[0.65rem] tracking-[0.14em] uppercase text-cream/30 mb-[0.15rem]">
                {label}
              </span>
              <span className="text-[0.85rem] text-cream/55 font-light">
                {val}
              </span>
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
