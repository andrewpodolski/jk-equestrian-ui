'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type Locale } from '@/i18n/config';
import {
  getLocaleFromPathname,
  localizePath,
  stripLocaleFromPathname,
} from '@/i18n/routing';

const options: { locale: Locale; label: string; flag: string }[] = [
  { locale: 'pl', label: 'PL', flag: '🇵🇱' },
  { locale: 'en', label: 'EN', flag: '🇬🇧' },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = getLocaleFromPathname(pathname);

  function onSelect(nextLocale: Locale) {
    if (nextLocale === activeLocale) return;
    const path = stripLocaleFromPathname(pathname);
    router.push(localizePath(path, nextLocale));
  }

  return (
    <div
      className="flex w-fit items-center gap-1 rounded-[2px] border border-gold/20 p-0.5"
      role="group"
      aria-label="Language"
    >
      {options.map(({ locale: optionLocale, label, flag }) => {
        const isActive = activeLocale === optionLocale;
        return (
          <button
            key={optionLocale}
            type="button"
            aria-pressed={isActive}
            aria-label={optionLocale === 'pl' ? 'Polski' : 'English'}
            onClick={() => onSelect(optionLocale)}
            className={[
              'flex items-center gap-1.5 px-2.5 py-1 text-[0.68rem] tracking-[0.1em] uppercase rounded-[1px] border-none cursor-pointer transition-colors duration-200',
              isActive
                ? 'bg-gold/15 text-gold'
                : 'bg-transparent text-cream/55 hover:text-gold-light',
            ].join(' ')}
          >
            <span aria-hidden className="text-[0.85rem] leading-none">
              {flag}
            </span>
            {label}
          </button>
        );
      })}
    </div>
  );
}
