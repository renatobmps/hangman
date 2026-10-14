import type { Meta, StoryObj } from '@storybook/react-vite';
import { Design } from './design';
import { expect } from 'storybook/test';

const meta = {
  component: Design,
  title: 'Design',
} satisfies Meta<typeof Design>;
export default meta;

type Story = StoryObj<typeof Design>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Design/gi)).toBeTruthy();
  },
} satisfies Story;
