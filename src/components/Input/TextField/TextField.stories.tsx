import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Input/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
