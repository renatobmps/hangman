import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Layout from '.';

export default {
  component: Layout.DashboardLayout,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Root of Component" />
    }
  }
} as Meta<typeof Layout.DashboardLayout>;

export const Default: StoryObj<typeof Layout.DashboardLayout> = {
  args: {
    children: <div style={{ background: 'red', minHeight: '100vh', width: '100%' }}>Page content</div>
  }
};