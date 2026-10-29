import { Globe, AppWindow, Database, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { hostingTypeIds } from '@/lib/data';

const iconMap: Record<string, typeof Globe> = {
   sites: Globe,
   apps: AppWindow,
   database: Database,
   fullstack: Layers,
};

export function HostingTypesSection() {
   const t = useTranslations('hostingTypes');

   return (
      <section className="py-16 md:py-24">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="hosting" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
               <p className="mt-3 text-muted-foreground text-pretty">{t('subtitle')}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {hostingTypeIds.map((id) => {
                  const Icon = iconMap[id] ?? Globe;
                  return (
                     <div key={id} className="rounded-2xl border border-border bg-card p-6">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                           <Icon className="size-5" />
                        </div>
                        <h3 className="mt-4 font-heading text-lg font-bold">
                           {t(`items.${id}.title`)}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">
                           {t(`items.${id}.text`)}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
