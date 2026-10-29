import '../globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Script from 'next/script';
import { cookies } from 'next/headers';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export function generateStaticParams() {
   return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ locale: string }>;
}): Promise<Metadata> {
   const { locale } = await params;
   const t = await getTranslations({ locale, namespace: 'meta' });

   return {
      title: t('title'),
      description: t('description'),
      generator: 'v0.app',
      icons: {
         icon: [
            {
               url: '/icon-light-32x32.png',
               media: '(prefers-color-scheme: light)',
            },
            {
               url: '/icon-dark-32x32.png',
               media: '(prefers-color-scheme: dark)',
            },
            {
               url: '/icon.svg',
               type: 'image/svg+xml',
            },
         ],
         apple: '/apple-icon.png',
      },
      alternates: {
         languages: {
            es: '/',
            en: '/en',
         },
      },
   };
}

export const viewport: Viewport = {
   colorScheme: 'light dark',
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#18181b' },
   ],
};

export default async function RootLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}>) {
   const { locale } = await params;
   if (!hasLocale(routing.locales, locale)) {
      notFound();
   }

   // Habilita el render estático por locale.
   setRequestLocale(locale);

   // El tema se lee de una cookie en el servidor (no de un script inline) para
   // que sobreviva a la navegación entre locales, que remonta <html> por
   // completo: un <script beforeInteractive> no vuelve a ejecutarse ahí.
   const themeCookie = (await cookies()).get('theme')?.value;
   const theme = themeCookie === 'dark' || themeCookie === 'light' ? themeCookie : undefined;

   return (
      <html
         lang={locale}
         className={cn(inter.variable, manrope.variable, 'bg-background', theme)}
         data-scroll-behavior="smooth"
         suppressHydrationWarning
      >
         <body className="font-sans antialiased">
            <NextIntlClientProvider>
               {children}
               {process.env.NODE_ENV === 'production' && (
                  <Script
                     defer
                     src="https://cloud.umami.is/script.js"
                     data-website-id="f7c9f259-ef79-42aa-bdca-47cd64887b21"
                     strategy="afterInteractive"
                  />
               )}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
