import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PricingSection } from "@/components/pricing-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { TechTrust } from "@/components/tech-trust"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PricingSection />
        <ServicesSection />
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
