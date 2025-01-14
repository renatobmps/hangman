import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '../index';

export default {
  argTypes: { delay_ms: { type: 'number' } },
  component: Hints.Loading,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Loading animation to mini card" />
    }
  }
} as Meta<typeof Hints.Loading>;

export const Default: StoryObj<typeof Hints.Loading> = {
};

export const Slow: StoryObj<typeof Hints.Loading> = {
  args: {
    delay_ms: 500,
  }
};

export const Fast: StoryObj<typeof Hints.Loading> = {
  args: {
    delay_ms: 100,
  }
};

export const Small: StoryObj<typeof Hints.Loading> = {
  decorators: [
    Story => (
      <>
        <style jsx global>{`
          :root {
            --hints__loading-w: 50px;
          }
        `}</style>
        <Story />
      </>
    ),
  ]
};
