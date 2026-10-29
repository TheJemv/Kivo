import { Users, Store } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { contact, resellerCardIds } from '@/lib/data';
import { LinkButton } from './link-button';
import { DiscordIcon } from './discord-icon';

const iconMap: Record<string, typeof Users> = {
   referral: Users,
   reseller: Store,
};

export function ResellersSection() {
   const t = useTranslations('resellers');

   return (
      <section className="border-y border-border bg-secondary/40 py-16 md:py-24">
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div id="revendedores" className="mx-auto max-w-2xl scroll-mt-24 text-center">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t('eyebrow')}
               </p>
               <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                  {t('heading')}
               </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
               {resellerCardIds.map((id) => {
                  const Icon = iconMap[id] ?? Users;
                  return (
                     <div key={id} className="rounded-2xl border border-border bg-card p-6">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                           <Icon className="size-5" />
                        </div>
                        <h3 className="mt-4 font-heading text-lg font-bold">
                           {t(`cards.${id}.title`)}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">
                           {t(`cards.${id}.text`)}
                        </p>
                     </div>
                  );
               })}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center font-heading text-lg font-bold text-balance">
               {t('highlight')}
            </p>

            <div className="mt-8 flex justify-center">
               <LinkButton href={contact.discordUrl} external size="lg">
                  <DiscordIcon className="size-5" />
                  {t('cta')}
               </LinkButton>
            </div>
         </div>
      </section>
   );
}
