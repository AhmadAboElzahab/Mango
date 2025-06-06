import { Meta, StoryObj } from "@storybook/react";
import AdvancedFilter from "./AdvancedFilter";

const meta: Meta<typeof AdvancedFilter> = {
  title: "Filters/AdvancedFilter",
  component: AdvancedFilter,
};

export default meta;

type Story = StoryObj<typeof AdvancedFilter>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
