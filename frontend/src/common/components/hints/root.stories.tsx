import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from './index';

export default {
  component: Hints.Root,
  parameters: {
    docs: {
      page: () => <StorybookPage description="Root of Component" />
    }
  }
} as Meta<typeof Hints.Root>;

export const Default: StoryObj<typeof Hints.Root> = {
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

export const Integrated: StoryObj<typeof Hints.Root> = {
  args: {
    children: (
      <>
        <Hints.HeaderActions>
          <Hints.Navigation />
          <Hints.Cta href="/dashboard/hints/new">Add hint</Hints.Cta>
        </Hints.HeaderActions>
        <Hints.HintList>
          <Hints.Hint total_words={100} />
          <Hints.Hint title="Filme" isActive total_words={10} />
          <Hints.Hint title="Jogo" isActive total_words={0} />
          <Hints.Hint title="Personagem" isActive total_words={50} />
          <Hints.Hint title="País" isActive total_words={30} />
          <Hints.Hint title="Nome" isActive total_words={100} />
        </Hints.HintList>
      </>
    )
  }
};