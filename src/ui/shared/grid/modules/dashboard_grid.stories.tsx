import { Meta, StoryObj } from "@storybook/react";
import * as Mocks from '../mocks';
import Grid from "..";

export const Default: StoryObj<typeof Grid.DashboardGrid> = {
  args: {
    children: (
      <>
        <Mocks.Card $color="red" />
        <Mocks.Card $color="blue" />
        <Mocks.Card $color="green" />
        <Mocks.Card $color="red" />
        <Mocks.Card $color="blue" />
        <Mocks.Card $color="green" />
        <Mocks.Card $color="red" />
        <Mocks.Card $color="blue" />
        <Mocks.Card $color="green" />
        <Mocks.Card $color="red" />
      </>
    ),
  },
};

const meta: Meta<typeof Grid.DashboardGrid> = {
  component: Grid.DashboardGrid,
};

export default meta;
