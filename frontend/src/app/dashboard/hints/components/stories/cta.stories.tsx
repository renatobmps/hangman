import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '../index';

export default {
  component: Hints.Cta,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Main button to add hints" />
    }
  }
} as Meta<typeof Hints.Cta>;

export const Default: StoryObj<typeof Hints.Cta> = {
  args: { children: 'Add hint' }
};

export const TryAgain: StoryObj<typeof Hints.Cta> = {
  args: {
    children: "Try again",
    onClick: () => alert('Restart page fn'),
  }
};
