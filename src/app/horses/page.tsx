import { HorsesPageClient } from '@/app/horses/HorsesPageClient';
import type { Locale } from '@/i18n/config';
import { getNestedMessages } from '@/i18n/server';

async function HorsesPageContent({ locale }: { locale: Locale }) {
  const messages = await getNestedMessages(locale);
  return <HorsesPageClient messages={messages} />;
}

export default function HorsesPage() {
  return HorsesPageContent({ locale: 'pl' });
}

export function EnHorsesPage() {
  return HorsesPageContent({ locale: 'en' });
}
