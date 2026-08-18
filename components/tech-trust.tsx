import Image from "next/image"
import { Zap, ShieldCheck, Lock } from "lucide-react"
import { techStack } from "@/lib/data"

const iconMap = {
  zap: Zap,
  "shield-check": ShieldCheck,
  lock: Lock,
}

export function TechTrust() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {techStack.title}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {techStack.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Zap
            return (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-8">
          {techStack.logos.map((logo) => (
            <Image
              key={logo.name}
              src={`/logos/${logo.iconSlug}.svg`}
              alt={logo.name}
              width={96}
              height={28}
              className="tech-logo h-6 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
