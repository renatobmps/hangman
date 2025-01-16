import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Layout from '.';

export default {
  component: Layout.DashboardTop,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Top of page" />
    }
  }
} as Meta<typeof Layout.DashboardTop>;

export const Default: StoryObj<typeof Layout.DashboardTop> = {};
