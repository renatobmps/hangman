import { Meta, StoryObj } from "@storybook/react";
import * as Mocks from '../mocks';
import { GridComponents } from "..";

export const Default: StoryObj<typeof GridComponents.Root> = {
  args: {
    use_highlight: false,
    children: (
      <>
        <style>{`
          :root {
            --gap-v: 1rem;
            --gap-h: 1rem;
            --grid-quantity: 10;

            @media (max-width: 1000px) { --grid-quantity: 9; }
            @media (max-width: 900px) { --grid-quantity: 8; }
            @media (max-width: 800px) { --grid-quantity: 7; }
            @media (max-width: 700px) { --grid-quantity: 6; }
            @media (max-width: 600px) { --grid-quantity: 5; }
            @media (max-width: 500px) { --grid-quantity: 4; }
            @media (max-width: 400px) { --grid-quantity: 3; }
            @media (max-width: 300px) { --grid-quantity: 2; }
            @media (max-width: 200px) { --grid-quantity: 1; }
        `}</style>
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

const meta: Meta<typeof GridComponents.Root> = {
  argTypes: { use_highlight: { type: 'boolean' } },
  component: GridComponents.Root,
};

export default meta;
