import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/design-system/feedback/Toast';
import { toast } from '@/components/design-system/feedback/Toast';

interface ToastDemoProps {
  variant: 'default' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  description?: string;
  duration?: number;
  withAction?: boolean;
}

const ToastDemo = ({
  variant,
  title,
  description,
  duration,
  withAction,
}: ToastDemoProps) => {
  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title,
            description,
            variant,
            duration,
            action: withAction ? (
              <Button size="sm" variant="outline" onClick={() => console.log('Toast action clicked')}>
                Undo
              </Button>
            ) : undefined,
          });
        }}
      >
        Show {variant} Toast
      </Button>
      <Toaster />
    </div>
  );
};

const meta: Meta<typeof ToastDemo> = {
  title: 'Design System/Feedback/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Toast variant',
    },
    title: {
      control: 'text',
      description: 'Toast title',
    },
    description: {
      control: 'text',
      description: 'Toast description',
    },
    duration: {
      control: { type: 'number', min: 1000, step: 1000 },
      description: 'Duration in milliseconds',
    },
    withAction: {
      control: 'boolean',
      description: 'Include an action button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastDemo>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Default Toast',
    description: 'This is a standard notification',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'Here is some useful information for you',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your action was completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action might cause issues',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem with your request',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Changes Saved',
    description: 'Your changes have been saved',
    withAction: true,
  },
};

export const ShortDuration: Story = {
  args: {
    variant: 'success',
    title: 'Quick Notification',
    description: 'This toast will disappear quickly',
    duration: 2000,
  },
};

export const LongDuration: Story = {
  args: {
    variant: 'warning',
    title: 'Important Notice',
    description: 'This toast will stay visible for longer',
    duration: 10000,
  },
};

export const TitleOnly: Story = {
  args: {
    variant: 'info',
    title: 'Simple Toast Message',
  },
};

export const AllToastTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button
        onClick={() => {
          toast({
            title: "Default Toast",
            description: "Standard notification toast",
            variant: "default",
          });
        }}
      >
        Show Default Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Info Message",
            description: "Useful information for the user",
            variant: "info",
          });
        }}
      >
        Show Info Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Success!",
            description: "Action completed successfully",
            variant: "success",
          });
        }}
      >
        Show Success Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Warning",
            description: "This action requires attention",
            variant: "warning",
          });
        }}
      >
        Show Warning Toast
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "Error!",
            description: "Something went wrong",
            variant: "error",
          });
        }}
      >
        Show Error Toast
      </Button>
      <Toaster />
    </div>
  ),
};