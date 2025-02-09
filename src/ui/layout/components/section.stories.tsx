import { Meta, StoryObj } from "@storybook/react";
import * as Mock from "../mocks";
// import { LayoutComponents } from "..";
import Section from "./section";

const LayoutComponents = {
  Root: Section
}

export const AsText: StoryObj<typeof LayoutComponents.Root> = {
  args: {
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae doloremque obcaecati adipisci dolorem optio, itaque labore, dolore laboriosam facilis quam veniam, repudiandae perspiciatis temporibus rerum ex culpa laudantium nemo enim!',
    title_as: 'h1',
    children: (
      <>
        <Mock.PanelText />
        <Mock.PanelText />
        <Mock.Footer />
        <Mock.PanelText />
      </>
    ),
  },
};

export const AsElement: StoryObj<typeof LayoutComponents.Root> = {
  args: {
    title: <Mock.PanelTitle />,
    children: (
      <>
        <Mock.PanelText />
        <Mock.PanelText />
      </>
    ),
  }
}

export const AsElement2: StoryObj<typeof LayoutComponents.Root> = {
  args: {
    title: <h1>Custom <i><u>element</u></i></h1>,
    children: (
      <>
        <Mock.PanelText />
        <Mock.Main />
        <Mock.Footer />
      </>
    ),
  }
}

const meta: Meta<typeof LayoutComponents.Root> = {
  component: LayoutComponents.Root,
};

export default meta;
