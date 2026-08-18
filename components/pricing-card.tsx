import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

type Pkg = {
  id: string
  name: string
  price: number
  currency: string
  billing: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaOverride?: string
}

export function PricingCard({ pkg }: { pkg: Pkg }) {
  const isFree = pkg.price === 0
  const cta = pkg.ctaOverride ?? "Contratar por WhatsApp"
  const message = `Hola, me interesa el paquete "${pkg.name}". ¿Me das más información? 🚀`

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 transition-shadow",
        pkg.highlighted
          ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary"
          : "border-border hover:shadow-md",
      )}
    >
      {pkg.highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Más popular
        </span>
      )}

      <h3 className="font-heading text-lg font-bold">{pkg.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>

      <div className="mt-5">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-extrabold tracking-tight">
            {isFree ? "Gratis" : formatPrice(pkg.price, pkg.currency)}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{pkg.billing}</p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>

      <WhatsAppButton
        message={message}
        variant={pkg.highlighted ? "solid" : "outline"}
        className="mt-7 w-full"
      >
        <WhatsAppIcon className="size-4" />
        {cta}
      </WhatsAppButton>
    </div>
  )
}
