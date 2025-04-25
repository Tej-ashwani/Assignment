import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@/components/design-system/typography/Heading';

const meta: Meta<typeof Heading> = {
  title: 'Design System/Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to use (overrides level for semantic HTML)',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Level1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    children: 'Heading Level 5',
  },
};

export const Level6: Story = {
  args: {
    level: 6,
    children: 'Heading Level 6',
  },
};

export const Centered: Story = {
  args: {
    level: 2,
    align: 'center',
    children: 'Centered Heading',
  },
};

export const LightWeight: Story = {
  args: {
    level: 2,
    weight: 'normal',
    children: 'Light Weight Heading',
  },
};

export const Overview: Story = {
  render: () => (
    <div className="space-y-6">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};