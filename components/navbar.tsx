import Image from "next/image"
import { brand } from "@/lib/data"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

const navLinks = [
  { label: "Precios", href: "#precios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
]

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/brand/kivo-symbol-color.svg"
        alt=""
        aria-hidden="true"
        width={32}
        height={32}
        priority
        className="h-7 w-7"
      />
      <span
        className="font-sans text-xl font-extrabold text-foreground"
        style={{ letterSpacing: brand.logoFont.letterSpacing }}
      >
        {brand.logoText}
      </span>
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
