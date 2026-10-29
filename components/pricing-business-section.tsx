import { Check, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { businessPackage } from '@/lib/data';
import { WhatsAppButton } from './whatsapp-button';
import { WhatsAppIcon } from './whatsapp-icon';

const numberLocale: Record<string, string> = { es: 'es-MX', en: 'en-US' };

export function PricingBusinessSection() {
   const t = useTranslations('pricingBusiness');
   const locale = useLocale();
   const features = t.raw('features') as string[];
   const price = new Intl.NumberFormat(numberLocale[locale] ?? 'es-MX').format(
      businessPackage.price,
   );

   return (
      <div className="border-y border-border bg-secondary/40 py-16 md:py-20">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="precios-negocios" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
               <p className="mt-3 text-muted-foreground">{t('text')}</p>
            </div>

            <div className="mx-auto mt-12 flex max-w-xl flex-col rounded-2xl border border-primary bg-card p-8 shadow-lg shadow-primary/10 ring-1 ring-primary">
               <h3 className="font-heading text-xl font-bold">{t('name')}</h3>

               <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold tracking-tight">
                     ${price}
                  </span>
                  <span className="text-sm text-muted-foreground">{t('perMonth')}</span>
               </div>
               <p className="mt-1 text-xs text-muted-foreground">{t('billing')}</p>

               <ul className="mt-6 flex flex-col gap-3">
                  {features.map((feature) => (
                     <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-foreground/90">{feature}</span>
                     </li>
                  ))}
               </ul>

               <WhatsAppButton
                  message={t('whatsappMessage')}
                  variant="solid"
                  size="lg"
                  className="mt-7 w-full"
               >
                  <WhatsAppIcon className="size-5" />
                  {t('cta')}
               </WhatsAppButton>
            </div>

            <div className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
               <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
               <p className="text-pretty">{t('domainNote')}</p>
            </div>
         </div>
      </div>
   );
}
