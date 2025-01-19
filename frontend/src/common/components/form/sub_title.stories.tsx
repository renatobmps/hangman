import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Form from './index';

export default {
  component: Form.SubTitle,
  parameters: {
    docs: {
      page: () => <StorybookPage />
    }
  }
} as Meta<typeof Form.SubTitle>;

export const Default: StoryObj<typeof Form.SubTitle> = {
  args: { children: 'Coincidência? Acho que não!' }
};