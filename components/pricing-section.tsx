import { packages, pricing } from "@/lib/data"
import { PricingCard } from "./pricing-card"

export function PricingSection() {
  return (
    <section id="precios" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Precios</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Planes claros para cada tipo de negocio
          </h2>
          <p className="mt-3 text-muted-foreground">{pricing.note}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
