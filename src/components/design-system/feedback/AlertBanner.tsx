import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AlertBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  action?: React.ReactNode;
}

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
        error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800 [&>svg]:text-red-600 dark:[&>svg]:text-red-400',
      },
      size: {
        sm: 'text-sm p-3',
        md: 'text-base p-4',
        lg: 'text-lg p-5',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
);

export const AlertBanner = ({
  className,
  variant,
  size,
  title,
  description,
  icon,
  onClose,
  action,
  ...props
}: AlertBannerProps) => {
  const IconComponent = icon || getDefaultIcon(variant);

  return (
    <div
      className={cn(alertVariants({ variant, size }), className)}
      role="alert"
      {...props}
    >
      {IconComponent}
      <div className="flex-1">
        {title && (
          <h5 className={cn("font-medium mb-1", description ? "" : "mb-0")}>
            {title}
          </h5>
        )}
        {description && (
          <div className={cn("text-sm opacity-90", size === 'sm' ? 'text-xs' : '', size === 'lg' ? 'text-base' : '')}>
            {description}
          </div>
        )}
        {action && (
          <div className="mt-3">
            {action}
          </div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-1 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white"
          type="button"
          aria-label="Close alert"
        >
          <XIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

function getDefaultIcon(variant: AlertBannerProps['variant']) {
  switch (variant) {
    case 'info':
      return <InfoIcon className="h-5 w-5" />;
    case 'success':
      return <CheckCircleIcon className="h-5 w-5" />;
    case 'warning':
      return <AlertTriangleIcon className="h-5 w-5" />;
    case 'error':
      return <AlertCircleIcon className="h-5 w-5" />;
    default:
      return <InfoIcon className="h-5 w-5" />;
  }
}

export default AlertBanner;