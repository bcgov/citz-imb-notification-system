import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-bc-blue-500 text-bc-gray-100 hover:bg-bc-blue-300/90 dark:bg-bc-blue-500 dark:text-bc-gray-100 dark:hover:bg-bc-blue-300/90',
        destructive:
          'bg-bc-red-500 text-bc-gray-100 hover:bg-bc-red-500/90 dark:bg-bc-red-500 dark:text-bc-gray-100 dark:hover:bg-bc-red-500/90',
        outline:
          'border border-slate-200 bg-white hover:bg-bc-gray-100 hover:text-bc-gray-500 dark:border-slate-800 dark:bg-white dark:hover:bg-bc-gray-100 dark:hover:text-bc-gray-500',
        link: 'bg-bc-blue-300 text-bc-gray-100 underline-offset-4 hover:underline dark:text-bc-gray-100',
        outlineLink:
          'border border-slate-200 bg-white dark:border-slate-800 dark:bg-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
