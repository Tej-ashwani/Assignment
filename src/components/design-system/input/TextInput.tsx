import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from '../typography/Text';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const inputVariants = cva(
  'flex h-10 px-3 py-2 bg-background border border-input rounded-md transition-colors',
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-12 text-lg',
      },
      variant: {
        default: 'shadow-sm',
        filled: 'bg-muted/50 border-transparent hover:bg-muted/80 focus-visible:bg-background',
        outline: 'border-2',
      },
      state: {
        default: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        error: 'border-destructive focus-visible:ring-destructive text-destructive',
        success: 'border-green-500 focus-visible:ring-green-500',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      state: 'default',
    },
  }
);

const wrapperVariants = cva('grid gap-1.5', {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      isLoading,
      fullWidth,
      className,
      size,
      variant,
      disabled,
      state = errorMessage ? 'error' : 'default',
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(wrapperVariants({ fullWidth }))}>
        {label && (
          <Text as="label" htmlFor={props.id} variant="label">
            {label}
          </Text>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-muted-foreground">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              inputVariants({ size, variant, state, className }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              isLoading && 'pr-10 cursor-wait',
              fullWidth && 'w-full',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
            disabled={disabled || isLoading}
            {...props}
          />
          {isLoading && (
            <div className="absolute right-3 flex items-center pointer-events-none">
              <svg
                className="animate-spin h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          {rightIcon && !isLoading && (
            <div className="absolute right-3 flex items-center pointer-events-none text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && !errorMessage && (
          <Text variant="helper">{helperText}</Text>
        )}
        {errorMessage && (
          <Text variant="helper" className="text-destructive">
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;