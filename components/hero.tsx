import { GitBranch, RefreshCw, FileText, Headphones } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LinkButton } from './link-button';

const badgeIcons = [GitBranch, RefreshCw, FileText, Headphones];

export function Hero() {
   const t = useTranslations('hero');
   const tBrand = useTranslations('brand');
   const badges = t.raw('badges') as string[];

   return (
      <section id="top" className="relative overflow-hidden">
         <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent/60 to-background"
         />
         <div className="mx-auto flex max-w-4xl items-center px-4 py-16 sm:px-6 md:py-24">
            <div>
               <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tBrand('tagline')}
               </span>
               <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  {t('title')}
               </h1>
               <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                  {t('subtitle')}
               </p>

               <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href="#precios" size="lg" variant="solid">
                     {t('ctaDev')}
                  </LinkButton>
                  <LinkButton href="#precios-negocios" size="lg" variant="outline">
                     {t('ctaBusiness')}
                  </LinkButton>
               </div>

               <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {badges.map((label, i) => {
                     const Icon = badgeIcons[i % badgeIcons.length];
                     return (
                        <li
                           key={label}
                           className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                           <Icon className="size-4 text-primary" />
                           {label}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </section>
   );
}
