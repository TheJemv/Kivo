import { useTranslations } from 'next-intl';
import { whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './whatsapp-icon';

export function FloatingWhatsApp() {
   const t = useTranslations('floatingWhatsapp');
   const tWhatsapp = useTranslations('whatsapp');

   return (
      <a
         href={whatsappLink(tWhatsapp('defaultMessage'))}
         target="_blank"
         rel="noopener noreferrer"
         aria-label={t('ariaLabel')}
         className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
         <WhatsAppIcon className="size-7" />
      </a>
   );
}
