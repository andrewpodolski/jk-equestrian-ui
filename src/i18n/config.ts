export const defaultLocale = 'pl' as const;

export const locales = ['pl'] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
