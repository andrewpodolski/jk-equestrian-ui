'use client';

import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { flattenMessages } from '@/i18n/flatten';
import { getLocaleFromPathname } from '@/i18n/routing';
import enMessages from '@/i18n/messages/en.json';
import plMessages from '@/i18n/messages/pl.json';

const messagesByLocale = {
  pl: flattenMessages(plMessages as Record<string, unknown>),
  en: flattenMessages(enMessages as Record<string, unknown>),
};

export function AppIntlProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <ReactIntlProvider
      locale={locale}
      messages={messagesByLocale[locale]}
      defaultLocale="pl"
    >
      {children}
    </ReactIntlProvider>
  );
}
