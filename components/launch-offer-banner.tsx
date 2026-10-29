import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { contact } from '@/lib/data';
import { LinkButton } from './link-button';
import { DiscordIcon } from './discord-icon';

export function LaunchOfferBanner() {
   const t = useTranslations('launchOffer');

   return (
      <section className="px-4 py-10 sm:px-6">
         <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start gap-3">
               <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
               <p className="font-heading text-base font-bold text-balance">{t('title')}</p>
            </div>
            <LinkButton href={contact.discordUrl} external size="md" className="shrink-0">
               <DiscordIcon className="size-4" />
               {t('cta')}
            </LinkButton>
         </div>
      </section>
   );
}
