"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { brand } from "@/lib/data"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"

const navLinks = [
  { label: "Precios", href: "#precios" },
  { label: "Servicios", href: "#servicios" },
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
  const [open, setOpen] = useState(false)

  // Cierra el menú primero y, una vez que termina la animación, baja suavemente a la sección.
  function handleMobileLinkClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    setOpen(false)
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 300)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center" aria-label={brand.name} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground active:translate-y-0.5 active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <WhatsAppButton size="sm" className="shrink-0 hidden md:flex">
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </WhatsAppButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary active:scale-95 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-in-out md:hidden",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleMobileLinkClick(e, link.href)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
