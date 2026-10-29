import { GitBranch, Settings2, Rocket, CloudCog } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { howItWorksStepIds } from '@/lib/data';

const iconMap: Record<string, typeof Rocket> = {
   connect: GitBranch,
   configure: Settings2,
   push: Rocket,
};

export function HowItWorksSection() {
   const t = useTranslations('howItWorks');

   return (
      <section className="border-y border-border bg-secondary/40 py-16 md:py-24">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="como-funciona" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
            </div>

            <ol className="mt-12 grid gap-8 sm:grid-cols-3">
               {howItWorksStepIds.map((id, index) => {
                  const Icon = iconMap[id] ?? Rocket;
                  return (
                     <li key={id} className="relative flex flex-col items-center text-center">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                           <Icon className="size-5" />
                        </div>
                        <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                           {index + 1}
                        </span>
                        <h3 className="mt-2 font-heading text-lg font-bold">
                           {t(`steps.${id}.title`)}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">
                           {t(`steps.${id}.text`)}
                        </p>
                     </li>
                  );
               })}
            </ol>

            <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
               <CloudCog className="mt-0.5 size-4 shrink-0 text-primary" />
               <p className="text-pretty">{t('note')}</p>
            </div>
         </div>
      </section>
   );
}
