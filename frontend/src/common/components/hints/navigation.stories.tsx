import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from './index';

export default {
  component: Hints.Navigation,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Navigation options" />
    },
  }
} as Meta<typeof Hints.Navigation>;

export const Default: StoryObj<typeof Hints.Navigation> = {};