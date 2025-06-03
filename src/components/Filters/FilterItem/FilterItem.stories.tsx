import { Meta, StoryObj } from '@storybook/react';
import FilterItem from './FilterItem';

const meta: Meta<typeof FilterItem> = {
  title: 'Filters/FilterItem',
  component: FilterItem,
};

export default meta;

type Story = StoryObj<typeof FilterItem>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
