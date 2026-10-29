import { useTranslations } from 'next-intl';
import { devPackages } from '@/lib/data';
import { PricingDevCard } from './pricing-dev-card';

export function PricingDevSection() {
   const t = useTranslations('pricingDev');
   const extras = t.raw('extras') as string[];

   return (
      <div className="py-16 md:py-20">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="precios" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
               <p className="mt-3 text-muted-foreground">{t('text')}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {devPackages.map((pkg) => (
                  <PricingDevCard key={pkg.id} pkg={pkg} />
               ))}
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-secondary/40 px-5 py-4">
               <p className="text-sm font-semibold text-foreground">{t('extrasHeading')}</p>
               <ul className="mt-2 flex flex-col gap-1.5">
                  {extras.map((extra) => (
                     <li key={extra} className="text-sm text-muted-foreground">
                        {extra}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}
