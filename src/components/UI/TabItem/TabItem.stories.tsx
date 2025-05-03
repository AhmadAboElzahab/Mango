import { Meta, StoryObj } from "@storybook/react";
import TabItem from "./TabItem";

const meta: Meta<typeof TabItem> = {
  title: "UI/TabItem",
  component: TabItem,
};

export default meta;

type Story = StoryObj<typeof TabItem>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
