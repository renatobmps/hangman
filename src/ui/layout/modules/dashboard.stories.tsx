import { Meta, StoryObj } from '@storybook/react';
import { LayoutComponents } from '..';

const Component = {
  Component: {
    Root: () => <LayoutComponents.Root>Implementar</LayoutComponents.Root>
  }
}

export const Default: StoryObj<typeof Component.Component.Root> = {
}

const meta: Meta<typeof Component.Component.Root> = {
  component: Component.Component.Root
}

export default meta;
