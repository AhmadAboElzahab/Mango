// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import Button, { type ButtonProps } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'Button style variant',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler',
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
};

export const WithChildren: Story = {
  args: {
    variant: 'primary',
    children: <span>Button with children</span>,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    className: 'text-sm px-2 py-1',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    className: 'text-lg px-6 py-3',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <svg
          className='inline-block w-4 h-4 mr-2'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <title>title</title>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
        </svg>
        With Icon
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: (
      <>
        <svg
          className='inline-block w-4 h-4 mr-2 animate-spin'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <title>title</title>
          <circle
            cx='12'
            cy='12'
            r='10'
            strokeWidth='4'
            stroke='currentColor'
            strokeDasharray='32'
            strokeDashoffset='8'
          />
        </svg>
        Loading...
      </>
    ),
  },
};
