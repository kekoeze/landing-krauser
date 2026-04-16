import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient:
          'relative overflow-hidden rounded-2xl !text-white ' +
          // gradient + subtle bloom
          'bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.16),transparent_52%),linear-gradient(135deg,#6D28D9_0%,#8A2BE2_28%,#C026D3_62%,#F472B6_100%)] ' +
          'shadow-[0_16px_34px_rgba(88,28,135,0.22),0_12px_22px_rgba(192,38,211,0.12)] ' +
          'border border-white/20 ' +
          'transition-all duration-300 ' +
          'hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/30 hover:brightness-110 hover:saturate-125 ' +
          'hover:ring-1 hover:ring-[#C026D3]/25 hover:shadow-[0_20px_55px_rgba(88,28,135,0.28),0_16px_30px_rgba(192,38,211,0.16)] ' +
          'active:translate-y-0 active:scale-[0.99] ' +
          'focus-visible:ring-[#C026D3]/40 focus-visible:ring-offset-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-2xl px-10',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => (
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        variant === 'gradient'
          ? // moving sheen + inner bevel
            'after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.14)] ' +
              'before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 ' +
              'before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.30),transparent)] ' +
              'before:translate-x-[-60%] hover:before:translate-x-[220%] before:transition-transform before:duration-700 before:ease-out ' +
              'before:content-[\'\'] after:content-[\'\']'
          : ''
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
