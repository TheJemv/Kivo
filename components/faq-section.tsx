import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { faqIds } from '@/lib/data';

export function FaqSection() {
   const t = useTranslations('faq');

   return (
      <section className="py-16 md:py-24">
         <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div id="preguntas" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
            </div>

            <div className="mt-10 flex flex-col gap-3">
               {faqIds.map((id) => (
                  <details
                     key={id}
                     className="group rounded-xl border border-border bg-card px-5 py-4 [&_svg]:transition-transform [&[open]_svg]:rotate-180"
                  >
                     <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold [&::-webkit-details-marker]:hidden">
                        {t(`items.${id}.question`)}
                        <ChevronDown className="size-5 shrink-0 text-primary" />
                     </summary>
                     <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                        {t(`items.${id}.answer`)}
                     </p>
                  </details>
               ))}
            </div>
         </div>
      </section>
   );
}
