import { useTranslations } from 'next-intl';
import { contact } from '@/lib/data';
import { WhatsAppButton } from './whatsapp-button';
import { WhatsAppIcon } from './whatsapp-icon';
import { LinkButton } from './link-button';
import { DiscordIcon } from './discord-icon';

export function CTABanner() {
   const t = useTranslations('cta');

   return (
      <section className="px-4 py-16 sm:px-6 md:py-20">
         <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
               {t('heading')}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
               <LinkButton href={contact.discordUrl} external variant="light" size="lg">
                  <DiscordIcon className="size-5" />
                  {t('discordCta')}
               </LinkButton>
               <WhatsAppButton message={t('whatsappMessage')} variant="outline" size="lg">
                  <WhatsAppIcon className="size-5" />
                  {t('whatsappCta')}
               </WhatsAppButton>
            </div>
         </div>
      </section>
   );
}
