import { Globe } from "lucide-react"
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

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-secondary/40 px-5 py-4 text-sm text-muted-foreground">
          <Globe className="mt-0.5 size-4 shrink-0 text-primary" />
          <p className="text-pretty">{pricing.domainNote}</p>
        </div>
      </div>
    </section>
  )
}
