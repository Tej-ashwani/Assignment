import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@/components/design-system/typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Design System/Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      description: 'Text size',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold'],
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
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph with standard size and weight.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'This is a small paragraph that can be used for less prominent content.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'This is a large paragraph that can be used for emphasizing content.',
  },
};

export const Medium: Story = {
  args: {
    weight: 'medium',
    children: 'This paragraph has medium weight for slight emphasis.',
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: 'This paragraph is center-aligned for special layout needs.',
  },
};

export const LongParagraph: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.`,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Overview: Story = {
  render: () => (
    <div className="space-y-6" style={{ maxWidth: '600px' }}>
      <Paragraph size="xl">
        Extra Large: Use for introductory paragraphs or important information.
      </Paragraph>
      <Paragraph size="lg">
        Large: For content that needs more emphasis than the standard text.
      </Paragraph>
      <Paragraph>
        Base (Default): The standard paragraph size for most body content. Offers excellent readability for extended reading.
      </Paragraph>
      <Paragraph size="sm">
        Small: Use for supporting information, captions, or when space is limited.
      </Paragraph>
      <Paragraph size="xs">
        Extra Small: Reserved for legal text, footnotes, or other minimal emphasis content.
      </Paragraph>
    </div>
  ),
};