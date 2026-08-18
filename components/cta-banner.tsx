import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

export function CTABanner() {
  const message = "Hola, quiero agendar una consulta gratuita para mi proyecto web 🚀"

  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          ¿Listo para tener una página web que trabaje por ti?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/80 text-pretty">
          Agenda una consulta gratuita de 20 minutos. Sin costo ni compromiso: platicamos tu idea y te
          doy una cotización personalizada.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton message={message} variant="light" size="lg">
            <WhatsAppIcon className="size-5" />
            Agenda tu consulta gratis
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
