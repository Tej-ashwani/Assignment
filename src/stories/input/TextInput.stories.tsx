import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '@/components/design-system/input/TextInput';
import { FishSymbolIcon as AtSymbolIcon, EyeIcon, LoaderIcon, SearchIcon } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Input/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: 'Visual style variant',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Current state of the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Shows a loading indicator',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Makes the input take full width of container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Username must be 3-16 characters long',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    errorMessage: 'Password must be at least 8 characters',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    leftIcon: <AtSymbolIcon className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    rightIcon: <SearchIcon className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    label: 'Processing',
    placeholder: 'Loading...',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot be edited',
    disabled: true,
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Filled Input',
    placeholder: 'Enter text...',
    variant: 'filled',
  },
};

export const OutlineVariant: Story = {
  args: {
    label: 'Outline Input',
    placeholder: 'Enter text...',
    variant: 'outline',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
  },
};

export const SuccessState: Story = {
  args: {
    label: 'Valid Input',
    placeholder: 'Valid value',
    state: 'success',
    value: 'Correct value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes full width of container',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PasswordWithToggle: Story = {
  render: () => {
    // This would normally use React state, but for Storybook we just show the concept
    return (
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        rightIcon={<EyeIcon className="h-4 w-4 cursor-pointer" />}
        helperText="Click the eye icon to toggle visibility"
      />
    );
  },
};

export const InputStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <TextInput
        label="Default"
        placeholder="Regular input"
      />
      <TextInput
        label="Focused"
        placeholder="Click to focus"
        className="ring-2 ring-ring ring-offset-2"
      />
      <TextInput
        label="With error"
        placeholder="Error state"
        errorMessage="This field has an error"
      />
      <TextInput
        label="Success"
        placeholder="Success state"
        state="success"
        value="Correct value"
      />
      <TextInput
        label="Disabled"
        placeholder="Cannot edit"
        disabled
      />
      <TextInput
        label="Loading"
        placeholder="Processing..."
        isLoading
      />
    </div>
  ),
};