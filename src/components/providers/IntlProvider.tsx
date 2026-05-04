'use client';

import { IntlProvider as ReactIntlProvider } from 'react-intl';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';

interface Props {
  locale: Locale;
  messages: Record<string, unknown>;
  children: ReactNode;
}

export function IntlProvider({ locale, messages, children }: Props) {
  return (
    <ReactIntlProvider locale={locale} messages={messages as Record<string, string>} defaultLocale="pl">
      {children}
    </ReactIntlProvider>
  );
}
