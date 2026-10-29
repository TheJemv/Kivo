import { useTranslations } from 'next-intl';
import { webDesignPackages } from '@/lib/data';
import { WebDesignCard } from './web-design-card';

export function WebDesignSection() {
   const t = useTranslations('webDesign');

   return (
      <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="diseno-web" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
                  {t('heading')}
               </h2>
               <p className="mt-3 text-muted-foreground text-pretty">{t('text')}</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {webDesignPackages.map((pkg) => (
                  <WebDesignCard key={pkg.id} pkg={pkg} />
               ))}
            </div>
         </div>
      </section>
   );
}
