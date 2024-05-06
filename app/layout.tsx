import type { Metadata, Viewport } from 'next';
import { Source_Code_Pro } from 'next/font/google';

import './globals.css';
import { SITE_TITLE } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sourceCodePro = Source_Code_Pro({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Home - ${SITE_TITLE}`,
  description:
    "I'm a full stack JavaScript developer from the United States. This is the place where I tell you about myself, show off some work and blog about my thoughts.",
  twitter: {
    card: 'summary_large_image',
    creator: '@jrock2004',
    site: '@jrock2004',
    title: 'John Costanzo',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-layer1">
      <body className={`${sourceCodePro.className} h-full bg-layer1 text-text antialiased`}>
        <div className="h-full">
          <div className="mx-auto flex h-full max-w-6xl flex-col px-6 md:pt-8 xl:px-1.5">
            <Header />
            <main className="mb-20 mt-4 md:mt-20">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
