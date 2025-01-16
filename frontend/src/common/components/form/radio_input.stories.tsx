import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Form from '.';

export default {
  args: {
    inputName: 'radio_input',
    text: 'System under test'
  },
  argTypes: { strongText: { type: 'boolean' } },
  component: Form.RadioInput,
  parameters: {
    docs: {
      page: () => <StorybookPage description='This component is used to select on between N options' />
    }
  }
} as Meta<typeof Form.RadioInput>;

export const Default: StoryObj<typeof Form.RadioInput> = {};

export const StrongText: StoryObj<typeof Form.RadioInput> = {
  args: { strongText: true }
};