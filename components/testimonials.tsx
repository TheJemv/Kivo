import { Quote, MessageSquareDashed } from "lucide-react"
import { useTranslations } from "next-intl"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  const t = useTranslations("testimonials")
  const hasTestimonials = testimonials.length > 0

  return (
    <section id="testimonios" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t("eyebrow")}</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {t("heading")}
          </h2>
        </div>

        {hasTestimonials ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.id} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">
                  {t(`items.${item.id}.quote`)}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold">{t(`items.${item.id}.name`)}</div>
                  <div className="text-sm text-muted-foreground">{t(`items.${item.id}.business`)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-14 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MessageSquareDashed className="size-6" />
            </div>
            <p className="mt-4 font-heading text-lg font-bold">{t("comingSoonTitle")}</p>
            <p className="mt-1 text-muted-foreground text-pretty">{t("comingSoonText")}</p>
          </div>
        )}
      </div>
    </section>
  )
}
