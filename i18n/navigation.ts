import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

// Wrappers de next/navigation conscientes del locale actual.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
