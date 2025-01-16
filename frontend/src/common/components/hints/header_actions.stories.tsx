import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from './index';

export default {
  component: Hints.HeaderActions,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Container to header actions" />
    }
  }
} as Meta<typeof Hints.HeaderActions>;

export const Default: StoryObj<typeof Hints.HeaderActions> = {
  args: {
    children: (
      <>
        <div style={{ background: 'red' }}>Element 1</div>
        <div style={{ background: 'blue' }}>Element 2</div>
        <div style={{ background: 'green' }}>Element 3</div>
      </>
    )
  }
};

export const Integrated: StoryObj<typeof Hints.HeaderActions> = {
  args: {
    children: (
      <>
        <Hints.Navigation />
        <Hints.Cta href="/dashboard/hints/new">Add hint</Hints.Cta>
      </>
    )
  }
};