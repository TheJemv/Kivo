import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { TechTrust } from "@/components/tech-trust"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PricingSection />
        <AboutSection />
        <Testimonials />
        <CTABanner />
        <TechTrust />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
