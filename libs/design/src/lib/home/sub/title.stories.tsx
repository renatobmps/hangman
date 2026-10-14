import type { Meta, StoryObj } from '@storybook/react-vite';
import { Home } from '../';
import { expect } from 'storybook/test';

const meta = {
  component: Home.Title,
} satisfies Meta<typeof Home.Title>;
export default meta;

type Story = StoryObj<typeof Home.Title>;

export const HomeTitle = {
  args: {
    children: 'Jogo da forca',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Jogo da forca/)).toBeTruthy();
  },
} satisfies Story;
