import { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/components/design-system/typography/Text';

const meta: Meta<typeof Text> = {
  title: 'Design System/Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'label', 'caption'],
      description: 'HTML element to render',
    },
    variant: {
      control: { type: 'select' },
      options: ['label', 'caption', 'helper'],
      description: 'Text variant',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg'],
      description: 'Text size',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Field Label',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Image Caption Text',
  },
};

export const Helper: Story = {
  args: {
    variant: 'helper',
    children: 'Helper text provides additional guidance',
  },
};

export const Bold: Story = {
  args: {
    weight: 'bold',
    children: 'Bold emphasized text',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Larger text element',
  },
};

export const AsLabel: Story = {
  args: {
    as: 'label',
    htmlFor: 'example-input',
    children: 'Form Label Element',
  },
  render: (args) => (
    <div>
      <Text {...args} />
      <input id="example-input" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    </div>
  ),
};

export const Overview: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Text variant="label">Label Text</Text>
        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      
      <div>
        <img 
          src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Example" 
          className="w-64 h-48 object-cover rounded"
        />
        <Text variant="caption" className="block mt-1">
          Caption: Professional workspace with computer
        </Text>
      </div>
      
      <div>
        <Text variant="label">Password</Text>
        <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        <Text variant="helper" className="mt-1">
          Helper: Password must be at least 8 characters
        </Text>
      </div>
    </div>
  ),
};