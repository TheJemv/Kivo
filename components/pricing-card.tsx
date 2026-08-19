import { Check } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

type Pkg = {
  id: string
  price: number
  currency: string
  highlighted?: boolean
}

// Mapea el locale de la UI a un locale de formato de números concreto,
// para que el separador de miles se vea igual en ambos idiomas ("2,800").
const numberLocale: Record<string, string> = { es: "es-MX", en: "en-US" }

export function PricingCard({ pkg }: { pkg: Pkg }) {
  const t = useTranslations("pricing")
  const locale = useLocale()

  const name = t(`packages.${pkg.id}.name`)
  const billing = t(`packages.${pkg.id}.billing`)
  const description = t(`packages.${pkg.id}.description`)
  const features = t.raw(`packages.${pkg.id}.features`) as string[]
  const ctaOverride = t.has(`packages.${pkg.id}.ctaOverride`)
    ? t(`packages.${pkg.id}.ctaOverride`)
    : undefined

  const isFree = pkg.price === 0
  const cta = ctaOverride ?? t("defaultCta")
  const message = t("whatsappMessage", { name })

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
          {t("popularBadge")}
        </span>
      )}

      <h3 className="font-heading text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-5">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-extrabold tracking-tight">
            {isFree ? t("freeLabel") : formatPrice(pkg.price, pkg.currency, numberLocale[locale])}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{billing}</p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
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
