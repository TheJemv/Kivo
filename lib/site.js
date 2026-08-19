import { contact } from "./data"

// Construye el enlace de WhatsApp dinámicamente a partir de los datos de contacto.
// `message` viene siempre del componente (texto traducido desde messages/*.json).
export function whatsappLink(message) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Formatea un precio en pesos mexicanos, ej. 2800 -> "$2,800 MXN".
export function formatPrice(price, currency = "MXN", locale = "es-MX") {
  return `$${new Intl.NumberFormat(locale).format(price)} ${currency}`
}
