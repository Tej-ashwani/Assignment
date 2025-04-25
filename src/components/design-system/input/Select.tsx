import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from '../typography/Text';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    'children'
  >,
    VariantProps<typeof selectTriggerVariants> {
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
}

const selectTriggerVariants = cva(
  'flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      variant: {
        default: '',
        outline: 'border-2',
      },
      state: {
        default: '',
        error: 'border-destructive focus:ring-destructive text-destructive',
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

export const Select = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(
  (
    {
      options,
      label,
      placeholder,
      helperText,
      errorMessage,
      fullWidth,
      size,
      variant,
      state = errorMessage ? 'error' : 'default',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(wrapperVariants({ fullWidth }))}>
        {label && (
          <Text as="label" variant="label">
            {label}
          </Text>
        )}
        <SelectPrimitive.Root disabled={disabled} {...props}>
          <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
              selectTriggerVariants({ size, variant, state }),
              fullWidth && 'w-full'
            )}
            aria-invalid={state === 'error'}
          >
            <SelectPrimitive.Value placeholder={placeholder || 'Select an option'} />
            <SelectPrimitive.Icon asChild>
              <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80"
              position="popper"
              sideOffset={5}
            >
              <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] bg-popover text-muted-foreground cursor-default">
                <ChevronUpIcon className="h-4 w-4" />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      "relative flex items-center h-[25px] rounded-sm pl-2 pr-8 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer select-none outline-none focus:bg-accent focus:text-accent-foreground",
                      size === 'sm' ? 'py-1.5 text-xs' : 'py-2',
                      size === 'lg' ? 'py-2.5 text-base' : 'py-2'
                    )}
                  >
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] bg-popover text-muted-foreground cursor-default">
                <ChevronDownIcon className="h-4 w-4" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
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

Select.displayName = 'Select';

export default Select;