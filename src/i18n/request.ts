import type { Locale } from './config';
import { flattenMessages } from './flatten';

export async function getMessages(locale: Locale) {
  const raw = (await import(`./messages/${locale}.json`)).default;
  return flattenMessages(raw as Record<string, unknown>);
}
