import { Meta, StoryObj } from '@storybook/react';
import { AlertBanner } from '@/components/design-system/feedback/AlertBanner';
import { Button } from '@/components/ui/button';
import { CircleAlertIcon, RocketIcon } from 'lucide-react';

const meta: Meta<typeof AlertBanner> = {
  title: 'Design System/Feedback/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the alert',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    description: {
      control: 'text',
      description: 'Alert description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This is an informational alert that provides neutral information to the user.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action cannot be undone. Please proceed with caution.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request. Please try again.',
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    description: 'This is an alert with only description text.',
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: 'info',
    title: 'Getting Started',
    description: 'Welcome to our application! Follow the quick start guide to get set up.',
    icon: <RocketIcon className="h-5 w-5" />,
  },
};

export const SmallSize: Story = {
  args: {
    variant: 'info',
    size: 'sm',
    title: 'Small Alert',
    description: 'This is a compact alert for less important information.',
  },
};

export const LargeSize: Story = {
  args: {
    variant: 'warning',
    size: 'lg',
    title: 'Large Alert',
    description: 'This is a larger alert for more critical information that needs user attention.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    description: 'Click the X button to dismiss this alert.',
    onClose: () => console.log('Alert dismissed'),
  },
};

export const WithAction: Story = {
  args: {
    variant: 'warning',
    title: 'Account Verification Required',
    description: 'Please verify your email address to continue using all features.',
    action: <Button size="sm">Verify Email</Button>,
  },
};

export const WithMultipleActions: Story = {
  args: {
    variant: 'error',
    title: 'Session Expired',
    description: 'Your session has expired due to inactivity.',
    action: (
      <div className="flex gap-2">
        <Button size="sm" variant="secondary">Cancel</Button>
        <Button size="sm" variant="destructive">Log In Again</Button>
      </div>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    variant: 'info',
    title: 'Custom Styled Alert',
    description: 'This alert has custom styling applied to it.',
    className: 'border-purple-300 bg-purple-50 text-purple-800 [&>svg]:text-purple-600',
    icon: <CircleAlertIcon className="h-5 w-5" />,
  },
};

export const AlertsOverview: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <AlertBanner
        variant="info"
        title="Information"
        description="A neutral message that doesn't require immediate attention."
      />
      <AlertBanner
        variant="success"
        title="Success"
        description="A positive message confirming a successful action or operation."
      />
      <AlertBanner
        variant="warning"
        title="Warning"
        description="A message that requires attention but isn't critical."
      />
      <AlertBanner
        variant="error"
        title="Error"
        description="A critical message about an error or failed operation."
      />
    </div>
  ),
};