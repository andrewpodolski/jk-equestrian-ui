export const defaultLocale = 'pl' as const;

export const locales = ['pl', 'en'] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function resolveLocale(locale: string | undefined | null): Locale {
  return locale && isValidLocale(locale) ? locale : defaultLocale;
}
