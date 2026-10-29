import { Check } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { contact } from '@/lib/data';
import { LinkButton } from './link-button';
import { DiscordIcon } from './discord-icon';

type Pkg = {
   id: string;
   price: number;
   currency: string;
   highlighted?: boolean;
};

// Mapea el locale de la UI a un locale de formato de números concreto,
// para que el separador de miles se vea igual en ambos idiomas ("1,499").
const numberLocale: Record<string, string> = { es: 'es-MX', en: 'en-US' };

export function PricingDevCard({ pkg }: { pkg: Pkg }) {
   const t = useTranslations('pricingDev');
   const locale = useLocale();

   const name = t(`packages.${pkg.id}.name`);
   const features = t.raw(`packages.${pkg.id}.features`) as string[];
   const price = new Intl.NumberFormat(numberLocale[locale] ?? 'es-MX').format(pkg.price);

   return (
      <div
         className={cn(
            'relative flex flex-col rounded-2xl border bg-card p-6 transition-shadow',
            pkg.highlighted
               ? 'border-primary shadow-lg shadow-primary/10 ring-1 ring-primary'
               : 'border-border hover:shadow-md',
         )}
      >
         {pkg.highlighted && (
            <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
               {t('popularBadge')}
            </span>
         )}

         <h3 className="font-heading text-lg font-bold">{name}</h3>

         <div className="mt-5 flex items-baseline gap-1">
            <span className="font-heading text-3xl font-extrabold tracking-tight">${price}</span>
            <span className="text-sm text-muted-foreground">{t('perMonth')}</span>
         </div>

         <ul className="mt-6 flex flex-1 flex-col gap-3">
            {features.map((feature) => (
               <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-foreground/90">{feature}</span>
               </li>
            ))}
         </ul>

         <LinkButton
            href={contact.discordUrl}
            external
            variant={pkg.highlighted ? 'solid' : 'outline'}
            className="mt-7 w-full"
         >
            <DiscordIcon className="size-4" />
            {t('cta')}
         </LinkButton>
      </div>
   );
}
