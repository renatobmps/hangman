import { Meta, StoryObj } from "@storybook/react";
import * as Mock from "../mocks";
import { LayoutComponents } from "..";

export const Default: StoryObj<typeof LayoutComponents.Root> = {
  args: {
    children: (
      <>
        <Mock.Header />
        <Mock.Main />
        <Mock.Footer />
      </>
    ),
  },
};

const meta: Meta<typeof LayoutComponents.Root> = {
  component: LayoutComponents.Root,
};

export default meta;
