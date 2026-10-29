// Server
import { setRequestLocale } from 'next-intl/server';

// Components
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { HostingTypesSection } from '@/components/hosting-types-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { PricingSection } from '@/components/pricing-section';
import { SecuritySection } from '@/components/security-section';
import { ResellersSection } from '@/components/resellers-section';
import { LaunchOfferBanner } from '@/components/launch-offer-banner';
import { FaqSection } from '@/components/faq-section';
import { WebDesignSection } from '@/components/web-design-section';
import { CTABanner } from '@/components/cta-banner';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   setRequestLocale(locale);

   return (
      <>
         <Navbar />
         <main>
            <Hero />
            <HostingTypesSection />
            <HowItWorksSection />
            <PricingSection />
            <SecuritySection />
            <ResellersSection />
            <LaunchOfferBanner />
            <FaqSection />
            <WebDesignSection />
            <CTABanner />
         </main>
         <Footer />
         <FloatingWhatsApp />
      </>
   );
}
