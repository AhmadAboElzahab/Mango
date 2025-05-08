import { Meta, StoryObj } from "@storybook/react";
import ColumnsManagment from "./ColumnsManagment";

const meta: Meta<typeof ColumnsManagment> = {
  title: "UI/ColumnsManagment",
  component: ColumnsManagment,
};

export default meta;

type Story = StoryObj<typeof ColumnsManagment>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
