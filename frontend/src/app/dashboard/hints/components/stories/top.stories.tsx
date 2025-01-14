import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '../index';

export default {
  component: Hints.Top,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Top of page" />
    }
  }
} as Meta<typeof Hints.Top>;

export const Default: StoryObj<typeof Hints.Top> = {};