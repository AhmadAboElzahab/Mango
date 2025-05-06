import { Meta, StoryObj } from '@storybook/react';

import Filter from './Filter';

const meta: Meta<typeof Filter> = {
  title: 'UI/Filter',
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
