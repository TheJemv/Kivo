import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import { brand, contact } from "@/lib/data"
import { Logo } from "./navbar"
import { WhatsAppIcon } from "./whatsapp-icon"
import { whatsappLink } from "@/lib/site"

export function Footer() {
  const t = useTranslations("footer")
  const tBrand = useTranslations("brand")
  const tCta = useTranslations("cta")

  const contactLinks = [
    { label: t("contactWhatsapp"), href: whatsappLink(tCta("whatsappMessage")), icon: WhatsAppIcon },
    { label: t("contactEmail"), href: `mailto:${contact.email}`, icon: Mail },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">{tBrand("tagline")}</p>
        </div>

        <div className="flex items-center gap-2">
          {contactLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {brand.name}. {t("copyrightSuffix")}
        </p>
      </div>
    </footer>
  )
}
