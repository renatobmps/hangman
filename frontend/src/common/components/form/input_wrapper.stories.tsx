import type { Meta, StoryObj } from '@storybook/react';
import StorybookPage from '@/stories/storybook_page';
import Form from './index';

export default {
  component: Form.InputWrapper,
  parameters: {
    docs: {
      page: () => <StorybookPage  />
    }
  }
} as Meta<typeof Form.InputWrapper>;

export const Default: StoryObj<typeof Form.InputWrapper> = {
  args: {
    children: [
      <div style={{ background: 'red' }}>Element 1</div>,
      <div style={{ background: 'blue' }}>Element 2</div>,
      <div style={{ background: 'green' }}>Element 3</div>,
    ]
  }
};

export const Integrated: StoryObj<typeof Form.InputWrapper> = {
  args: {
    children: [
      <Form.RadioInput inputName="word" strongText text="Bolacha" value="id_123" />,
      <Form.RadioInput inputName="word" strongText text="Biscoito" value="id_456" />,
      <Form.RadioInput inputName="word" strongText text="Futebol" value="id_789" />,
    ]
  }
};

export const WithScroll: StoryObj<typeof Form.InputWrapper> = {
  args: {
    children: [
      <div style={{ background: 'white' }}>Element 0</div>,
      <div style={{ background: 'red' }}>Element 1</div>,
      <div style={{ background: 'orange' }}>Element 2</div>,
      <div style={{ background: 'yellow' }}>Element 3</div>,
      <div style={{ background: 'green' }}>Element 4</div>,
      <div style={{ background: 'blue' }}>Element 5</div>,
      <div style={{ background: 'indigo' }}>Element 6</div>,
      <div style={{ background: 'violet' }}>Element 7</div>,
      <div style={{ background: 'black' }}>Element 8</div>,
    ]
  }
};