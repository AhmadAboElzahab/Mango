import { Meta, StoryObj } from "@storybook/react";
import TabsBar from "./TabsBar";

const meta: Meta<typeof TabsBar> = {
  title: "UI/TabsBar",
  component: TabsBar,
};

export default meta;

type Story = StoryObj<typeof TabsBar>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
