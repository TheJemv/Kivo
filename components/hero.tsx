import { Zap, ShieldCheck, Clock } from "lucide-react"
import { hero, brand } from "@/lib/data"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

const badges = [
  { icon: Zap, label: "Carga rápida" },
  { icon: Clock, label: "Entrega en semanas" },
  { icon: ShieldCheck, label: "Hosting confiable" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent/60 to-background"
      />
      <div className="mx-auto flex max-w-4xl items-center px-4 py-16 sm:px-6 md:py-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {brand.tagline}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {hero.subtitle}
          </p>

          <div className="mt-8">
            <WhatsAppButton size="lg">
              <WhatsAppIcon className="size-5" />
              {hero.ctaText}
            </WhatsAppButton>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <li key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="size-4 text-primary" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
