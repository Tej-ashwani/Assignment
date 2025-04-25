import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: 'span' | 'label' | 'caption';
  children: React.ReactNode;
}

const textVariants = cva('', {
  variants: {
    variant: {
      label: 'text-sm font-medium text-primary',
      caption: 'text-xs text-muted-foreground',
      helper: 'text-xs italic text-muted-foreground',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'label',
    size: 'sm',
    weight: 'medium',
  },
});

export const Text = ({
  as = 'span',
  variant,
  size,
  weight,
  className,
  children,
  ...props
}: TextProps) => {
  const Component = as;
  
  return (
    <Component
      className={cn(textVariants({ variant, size, weight, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;