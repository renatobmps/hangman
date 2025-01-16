import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Form from '.';

export default {
  component: Form.Submit,
  parameters: {
    docs: {
      page: () => <StorybookPage description='This button is used to trigger form action' />
    }
  }
} as Meta<typeof Form.Submit>;

export const Default: StoryObj<typeof Form.Submit> = {};