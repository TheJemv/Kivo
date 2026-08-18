import { contact } from "./data"

// Construye el enlace de WhatsApp dinámicamente a partir de los datos de contacto.
export function whatsappLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Formatea un precio en pesos mexicanos, ej. 2800 -> "$2,800 MXN".
export function formatPrice(price, currency = "MXN") {
  return `$${new Intl.NumberFormat("es-MX").format(price)} ${currency}`
}
