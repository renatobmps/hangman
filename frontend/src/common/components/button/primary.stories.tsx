import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Button from '.';

export default {
  component: Button.Primary,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Main button with main color" />
    }
  }
} as Meta<typeof Button.Primary>;

export const Default: StoryObj<typeof Button.Primary> = {
  args: { children: 'Primary button' }
};

export const AsLink: StoryObj<typeof Button.Primary> = {
  args: { children: 'Primary button as link', href: '#' }
};
