import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const headingVariants = cva('font-bold leading-tight tracking-tight', {
  variants: {
    level: {
      1: 'text-4xl md:text-5xl lg:text-6xl',
      2: 'text-3xl md:text-4xl lg:text-5xl',
      3: 'text-2xl md:text-3xl lg:text-4xl',
      4: 'text-xl md:text-2xl lg:text-3xl',
      5: 'text-lg md:text-xl lg:text-2xl',
      6: 'text-base md:text-lg lg:text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    weight: 'bold',
    align: 'left',
  },
});

export const Heading = ({
  as,
  level,
  weight,
  align,
  className,
  children,
  ...props
}: HeadingProps) => {
  const HeadingTag = as || (`h${level}` as any);
  
  return (
    <HeadingTag
      className={cn(headingVariants({ level, weight, align, className }))}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;