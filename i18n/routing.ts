import { defineRouting } from "next-intl/routing"

// Español es el idioma por defecto y vive en la raíz ("/"), sin prefijo,
// para no romper los enlaces y el SEO ya indexado del sitio actual.
// El inglés vive en "/en".
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
})

export type Locale = (typeof routing.locales)[number]
