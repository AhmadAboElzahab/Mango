import { Meta, StoryObj } from "@storybook/react";
import Search from "./Search";

const meta: Meta<typeof Search> = {
  title: "UI/Search",
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
