'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useIntl } from 'react-intl';
import { localizePath } from '@/i18n/routing';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export function LocaleLink({ href, ...props }: Props) {
  const { locale } = useIntl();
  return <Link href={localizePath(href, locale)} {...props} />;
}
