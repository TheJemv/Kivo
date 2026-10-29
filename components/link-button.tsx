import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'solid' | 'outline' | 'light';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
   solid: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20',
   outline: 'border border-border bg-card text-foreground hover:bg-secondary',
   light: 'bg-primary-foreground text-primary hover:bg-primary-foreground/90',
};

const sizes: Record<Size, string> = {
   sm: 'h-9 px-4 text-sm',
   md: 'h-11 px-5 text-sm',
   lg: 'h-14 px-7 text-base',
};

// Botón genérico con forma de enlace, para CTAs que no van a WhatsApp
// (anclas internas, Discord, etc). Comparte la misma escala visual que WhatsAppButton.
export function LinkButton({
   href,
   children,
   variant = 'solid',
   size = 'md',
   external = false,
   className,
}: {
   href: string;
   children: ReactNode;
   variant?: Variant;
   size?: Size;
   external?: boolean;
   className?: string;
}) {
   return (
      <a
         href={href}
         {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
         className={cn(
            'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            variants[variant],
            sizes[size],
            className,
         )}
      >
         {children}
      </a>
   );
}
