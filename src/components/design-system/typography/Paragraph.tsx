import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  children: React.ReactNode;
}

const paragraphVariants = cva('leading-relaxed', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    align: 'left',
  },
});

export const Paragraph = ({
  size,
  weight,
  align,
  className,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(paragraphVariants({ size, weight, align, className }))}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;