import { defaultLocale, resolveLocale, type Locale } from './config';

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname;
}

export function localizePath(path: string, locale: string): string {
  const resolved = resolveLocale(locale);
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (resolved === defaultLocale) return normalized;
  return normalized === '/' ? '/en' : `/en${normalized}`;
}
