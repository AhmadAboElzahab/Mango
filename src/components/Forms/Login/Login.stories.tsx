import { Meta, StoryObj } from "@storybook/react";
import Login from "./Login";

const meta: Meta<typeof Login> = {
  title: "Forms/Login",
  component: Login,
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {
  args: {
    // Default arguments for the story
  },
};
