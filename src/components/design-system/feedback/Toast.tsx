import * as React from 'react';
import { Toaster as Sonner } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, XIcon } from 'lucide-react';

// Main Toast Component
interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

// Export the toast provider
export function Toaster() {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
}

// Toast utility function
export function toast({
  title,
  description,
  action,
  variant = 'default',
  duration = 5000,
  ...props
}: ToastProps) {
  const { toast } = useToast();
  
  const icon = getIconForVariant(variant);
  
  return toast({
    title: (
      <div className="flex items-center gap-2">
        {icon && <span className="toast-icon">{icon}</span>}
        <span>{title}</span>
      </div>
    ),
    description,
    action,
    duration,
    ...props,
  });
}

// Variant based styling
const toastVariants = cva(
  "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "bg-blue-50 text-blue-900 border-blue-200",
        success: "bg-green-50 text-green-900 border-green-200",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
        error: "bg-red-50 text-red-900 border-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Helper function to get the appropriate icon for each variant
function getIconForVariant(variant: ToastProps['variant']) {
  switch (variant) {
    case 'info':
      return <InfoIcon className="h-5 w-5 text-blue-600" />;
    case 'success':
      return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
    case 'warning':
      return <AlertTriangleIcon className="h-5 w-5 text-yellow-600" />;
    case 'error':
      return <AlertCircleIcon className="h-5 w-5 text-red-600" />;
    default:
      return null;
  }
}

export default toast;