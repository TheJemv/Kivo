import { Rocket, Cpu, Headphones } from "lucide-react"
import { about } from "@/lib/data"

const icons = [Rocket, Cpu, Headphones]

export function AboutSection() {
  return (
    <section id="beneficios" className="scroll-mt-20 border-y border-border bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          {about.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {about.points.map((point, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={point.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{point.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
