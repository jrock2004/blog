import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export default function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link
      className="hover:bg-heading/5 focus:bg-heading/5 focus:ring-heading/80 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-transparent px-4 py-2.5 text-base font-semibold text-text hover:text-heading focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
      href={href}
    >
      {children}
    </Link>
  );
}

export interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}
