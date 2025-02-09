import { Meta, StoryObj } from "@storybook/react";
import { InputComponents } from "..";

export const Default: StoryObj<typeof InputComponents.Checkbox> = {
  args: {
    checked: false,
  },
};

const meta: Meta<typeof InputComponents.Checkbox> = {
  component: InputComponents.Checkbox,
};

export default meta;
