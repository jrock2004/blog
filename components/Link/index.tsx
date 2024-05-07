import { ReactNode } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <NextLink className="font-semibold text-text hover:text-heading" href={href} {...rest}>
      {children}
    </NextLink>
  );
}

export interface LinkProps extends NextLinkProps {
  children: ReactNode;
}
