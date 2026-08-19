"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { brand, navLinkIds } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { WhatsAppButton } from "./whatsapp-button"
import { WhatsAppIcon } from "./whatsapp-icon"
import { ThemeToggle } from "./theme-toggle"

const localeLabels: Record<string, string> = { es: "Español", en: "English" }

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

// Botón que abre un menú de opciones para elegir idioma.
// `variant="popover"` lo despliega flotando encima del contenido (desktop);
// `variant="inline"` lo despliega empujando el contenido hacia abajo, para
// que no quede recortado dentro del panel móvil colapsable.
function LanguageSwitcher({
  className,
  variant = "popover",
  onNavigate,
}: {
  className?: string
  variant?: "popover" | "inline"
  onNavigate?: () => void
}) {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations("nav")
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || variant !== "popover") return
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open, variant])

  const options = (
    <ul
      role="listbox"
      aria-label={t("languageLabel")}
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card py-1",
        variant === "popover" && "absolute right-0 top-full z-50 mt-2 min-w-36 shadow-lg",
        variant === "inline" && "mt-1.5 w-fit min-w-36",
      )}
    >
      {routing.locales.map((loc) => (
        <li key={loc}>
          <Link
            href={pathname}
            locale={loc}
            role="option"
            aria-selected={loc === locale}
            onClick={() => {
              setOpen(false)
              onNavigate?.()
            }}
            className={cn(
              "flex items-center justify-between gap-3 px-3.5 py-2 text-sm transition-colors",
              loc === locale
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {localeLabels[loc] ?? loc.toUpperCase()}
            {loc === locale && <Check className="size-4 text-primary" />}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div ref={containerRef} className={cn(variant === "popover" && "relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("languageLabel")}
        className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
      >
        <Globe className="size-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && options}
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useTranslations("nav")

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
          {navLinkIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground active:translate-y-0.5 active:scale-95"
            >
              {t(`links.${id}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <LanguageSwitcher className="hidden md:block" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
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
          open ? "max-h-104 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinkIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleMobileLinkClick(e, `#${id}`)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
            >
              {t(`links.${id}`)}
            </a>
          ))}
          <div className="mt-2 flex items-start gap-2 px-3">
            <LanguageSwitcher variant="inline" onNavigate={() => setOpen(false)} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
