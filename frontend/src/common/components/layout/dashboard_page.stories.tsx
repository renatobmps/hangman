import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Hints from '../hints/index';
import Layout from '.';

export default {
  component: Layout.DashboardPage,
  parameters: {
    docs: {
      page: () => <StorybookPage />
    }
  }
} as Meta<typeof Layout.DashboardPage>;

export const Default: StoryObj<typeof Layout.DashboardPage> = {
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

export const Integrated: StoryObj<typeof Layout.DashboardPage> = {
  args: {
    children: (
      <>
        <Layout.DashboardTop />
        <Hints.Root>
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
        </Hints.Root>
      </>
    )
  }
};
