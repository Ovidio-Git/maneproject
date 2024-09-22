'use client';

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            'flex h-9 w-9 items-center justify-start rounded-lg text-gray-400 transition-colors hover:text-white p-4 md:h-8 md:w-40',
            {
              'mane-navbar-item-background-color': pathname === href
            }
          )}
        >
          {children}
        </Link>
      </TooltipTrigger>
    </Tooltip>
  );
}
