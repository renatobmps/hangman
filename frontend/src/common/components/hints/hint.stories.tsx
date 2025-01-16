import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '.';

export default {
  component: Hints.Hint,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Mini card to list hints" />
    }
  }
} as Meta<typeof Hints.Hint>;

export const Default: StoryObj<typeof Hints.Hint> = {};

export const Loading: StoryObj<typeof Hints.Hint> = {
  args: { isLoading: true }
};

export const WithTitle: StoryObj<typeof Hints.Hint> = {
  args: { title: 'System under test' }
};

export const Active: StoryObj<typeof Hints.Hint> = {
  args: { title: 'System under test', isActive: true }
};

export const WithWords: StoryObj<typeof Hints.Hint> = {
  args: { total_words: 10 }
};