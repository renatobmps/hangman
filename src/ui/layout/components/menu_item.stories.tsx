import { Meta, StoryObj } from "@storybook/react";
import * as mocks from "../mocks";
import { LayoutComponents } from "..";

export const AsLink: StoryObj<typeof LayoutComponents.MenuItem> = {
  args: mocks.menuItemAsLink,
};

export const AsButton: StoryObj<typeof LayoutComponents.MenuItem> = {
  args: mocks.menuItemAsButton,
};

const meta: Meta<typeof LayoutComponents.MenuItem> = {
  component: LayoutComponents.MenuItem,
};

export default meta;
