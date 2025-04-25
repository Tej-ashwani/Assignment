import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/design-system/input/Select';

const meta: Meta<typeof Select> = {
  title: 'Design System/Input/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select field',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      description: 'Visual style variant',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error'],
      description: 'Current state of the select',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Makes the select take full width of container',
    },
  },
};

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'kiwi', label: 'Kiwi' },
];

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options: defaultOptions,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit',
    options: defaultOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select your country',
    helperText: 'This information will be used for shipping',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
      { value: 'uk', label: 'United Kingdom' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'Please select an option',
    errorMessage: 'This field is required',
    options: defaultOptions,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Preselected Option',
    defaultValue: 'banana',
    options: defaultOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot be changed',
    disabled: true,
    options: defaultOptions,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Product Selection',
    placeholder: 'Select a product',
    options: [
      { value: 'laptop', label: 'Laptop' },
      { value: 'smartphone', label: 'Smartphone' },
      { value: 'tablet', label: 'Tablet' },
      { value: 'desktop', label: 'Desktop', disabled: true },
      { value: 'accessories', label: 'Accessories', disabled: true },
    ],
  },
};

export const OutlineVariant: Story = {
  args: {
    label: 'Outline Select',
    placeholder: 'Select an option',
    variant: 'outline',
    options: defaultOptions,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Select',
    placeholder: 'Small size',
    size: 'sm',
    options: defaultOptions,
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Select',
    placeholder: 'Large size',
    size: 'lg',
    options: defaultOptions,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    placeholder: 'Takes full width of container',
    fullWidth: true,
    options: defaultOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ManyOptions: Story = {
  args: {
    label: 'With Many Options',
    placeholder: 'Select a month',
    options: [
      { value: 'jan', label: 'January' },
      { value: 'feb', label: 'February' },
      { value: 'mar', label: 'March' },
      { value: 'apr', label: 'April' },
      { value: 'may', label: 'May' },
      { value: 'jun', label: 'June' },
      { value: 'jul', label: 'July' },
      { value: 'aug', label: 'August' },
      { value: 'sep', label: 'September' },
      { value: 'oct', label: 'October' },
      { value: 'nov', label: 'November' },
      { value: 'dec', label: 'December' },
    ],
  },
};

export const SelectStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Select
        label="Default"
        placeholder="Regular select"
        options={defaultOptions}
      />
      <Select
        label="With error"
        placeholder="Error state"
        errorMessage="Please select a valid option"
        options={defaultOptions}
      />
      <Select
        label="Disabled"
        placeholder="Cannot select"
        disabled
        options={defaultOptions}
      />
      <Select
        label="With value"
        defaultValue="orange"
        options={defaultOptions}
      />
    </div>
  ),
};