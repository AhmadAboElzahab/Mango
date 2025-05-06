import { Meta, StoryObj } from '@storybook/react';

import Toolbar from './Toolbar';

const meta: Meta<typeof Toolbar> = {
  title: 'UI/Toolbar',
  component: Toolbar,
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
