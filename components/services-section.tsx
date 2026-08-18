import { Palette, Globe, Gauge, Share2, Wrench, Rocket } from "lucide-react"
import { services } from "@/lib/data"

const iconMap = {
  palette: Palette,
  globe: Globe,
  gauge: Gauge,
  share2: Share2,
  wrench: Wrench,
  rocket: Rocket,
}

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Servicios</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">{services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Rocket
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
