import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Layout from '.';

export default {
  component: Layout.ClientLayout,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Layout to use on client access pages" />
    }
  }
} as Meta<typeof Layout.ClientLayout>;

export const Default: StoryObj<typeof Layout.ClientLayout> = {
  args: {
    children: <div style={{ background: 'red', minHeight: '100vh', width: '100%' }}>Page content</div>
  }
};