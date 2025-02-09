import { Meta, StoryObj } from "@storybook/react";
import * as Mock from "../mocks";
import { LayoutComponents } from "..";

export const Default: StoryObj<typeof LayoutComponents.Panel> = {
  args: {
    children: (
      <>
        <Mock.PanelTitle />
        <Mock.PanelText />
        <Mock.PanelText />
        <Mock.PanelText />
        <Mock.PanelText />
      </>
    ),
  },
};

const meta: Meta<typeof LayoutComponents.Panel> = {
  component: LayoutComponents.Panel,
};

export default meta;
