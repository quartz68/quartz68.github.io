import '@/styles/globals.css';
import {
  IBM_Plex_Sans,
} from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

import { metadata as meta } from '@/app/config';
import Loader from '@/app/loader';
import Providers from '@/app/providers';

import { createMetadata } from '@/lib/metadata';

// https://iamsteve.me/blog/the-best-ink-trap-typefaces-for-websites
const font = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description
  }
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Providers>
          <Loader />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
