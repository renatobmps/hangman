import { Meta, StoryObj } from "@storybook/react";
import * as Mocks from '../mocks'
import Layout from "..";

export const Default: StoryObj<typeof Layout.Dashboard> = {
  args: {
    children: (
      <>
        <Mocks.Main />
        <Mocks.Footer />
      </>
    )
  }
};

const meta: Meta<typeof Layout.Dashboard> = {
  component: Layout.Dashboard
};

export default meta;
