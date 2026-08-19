// data.js
// Datos de negocio NO traducibles: precios, IDs, íconos, contacto, logos.
// Los textos que sí se traducen (títulos, descripciones, botones) viven en
// messages/es.json y messages/en.json, y se combinan con estos datos por id.
// Para cambiar precios o el número de WhatsApp, edita este archivo.
// Para cambiar textos, edita los .json de messages/.

export const brand = {
  name: "Kivo",
  logoText: "Kivo", // texto alternativo del logo (el wordmark ya viene resuelto en el SVG)
  logoFont: {
    family: "Inter",
    weight: 800, // ExtraBold, igual que el wordmark en public/brand/kivo-lockup.svg
    letterSpacing: "0",
  },
}

export const contact = {
  whatsappNumber: "528681570465", // formato: 52 + 10 dígitos, sin espacios ni +
  email: "email@proton.me",
}

// Orden y anclas del menú. Las etiquetas viven en messages: nav.links.<id>
export const navLinkIds = ["precios", "servicios", "beneficios", "testimonios"]

// Orden y precios de los paquetes. Nombre/descripción/features viven en
// messages: pricing.packages.<id>
export const packages = [
  { id: "landing", price: 2800, currency: "MXN", highlighted: false },
  { id: "sitio-5", price: 6500, currency: "MXN", highlighted: true },
  { id: "hosting", price: 349, currency: "MXN", highlighted: false },
  { id: "cita", price: 0, currency: "MXN", highlighted: false },
]

// Orden de los íconos de servicios. Título/texto viven en messages: services.items.<id>
export const serviceIconIds = ["palette", "globe", "gauge", "share2", "wrench", "rocket"]

// Orden de los puntos de "about". Título/texto viven en messages: about.points.<id>
export const aboutPointIds = ["delivery", "tech", "support", "handmade"]

// Orden de los bullets de tecnología. Título/texto viven en messages: techStack.items.<id>
export const techStackItemIds = ["zap", "shield-check", "lock"]

export const techStackLogos = [
  { name: "Next.js", iconSlug: "nextjs" },
  { name: "Docker", iconSlug: "docker" },
  { name: "Cloudflare", iconSlug: "cloudflare" },
]

// Agrega aquí testimonios reales conforme entregues proyectos, ej:
// { id: "cliente-1" } — y su name/business/quote en messages: testimonials.items.cliente-1
export const testimonials = []
