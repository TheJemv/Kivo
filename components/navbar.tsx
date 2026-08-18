import { brand } from "@/lib/data"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

const navLinks = [
  { label: "Precios", href: "#precios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
]

export function Logo() {
  const rest = brand.name.startsWith(brand.logoText)
    ? brand.name.slice(brand.logoText.length)
    : brand.name
  return (
    <span className="font-heading text-xl tracking-tight">
      <span className="font-extrabold text-foreground">{brand.logoText}</span>
      <span className="font-medium text-muted-foreground">{rest}</span>
    </span>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center" aria-label={brand.name}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <WhatsAppButton size="sm" className="shrink-0">
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </WhatsAppButton>
      </nav>
    </header>
  )
}
