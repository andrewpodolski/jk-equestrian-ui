import { headers } from 'next/headers';
import { resolveLocale, type Locale } from './config';
import type plMessages from './messages/pl.json';

export async function getRequestLocale(): Promise<Locale> {
  const headersList = await headers();
  return resolveLocale(headersList.get('x-locale') ?? undefined);
}

export async function getNestedMessages(
  locale: Locale,
): Promise<typeof plMessages> {
  return (await import(`./messages/${locale}.json`)).default;
}
