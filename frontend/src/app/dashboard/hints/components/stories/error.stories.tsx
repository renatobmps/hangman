import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '../index';

export default {
  args: { reset: () => alert('Reset functionality') },
  component: Hints.Error,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Error description" />
    }
  }
} as Meta<typeof Hints.Error>;

export const Default: StoryObj<typeof Hints.Error> = {};

export const WithMessage: StoryObj<typeof Hints.Error> = {
  args: {
    message: "Some error message"
  }
};
