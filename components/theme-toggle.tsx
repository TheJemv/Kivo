"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

// Alterna entre modo claro y oscuro añadiendo/quitando la clase `dark`
// en <html>. El estado inicial lo aplica un script inline en el layout
// (antes de la hidratación) para evitar el parpadeo de tema.
export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false)
  const t = useTranslations("nav")

  useEffect(() => {
    const root = document.documentElement
    if (root.classList.contains("dark")) {
      setIsDark(true)
    } else if (root.classList.contains("light")) {
      setIsDark(false)
    } else {
      // Sin preferencia guardada: sigue el tema del sistema.
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    document.documentElement.classList.toggle("light", !next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("lightMode") : t("darkMode")}
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95",
        className,
      )}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
