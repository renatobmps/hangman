import { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { FaCircleCheck, FaCircleXmark, FaGamepad } from "react-icons/fa6";
import styled, { css } from "styled-components";
// import { LayoutComponents } from "..";

const S = {
  DashboardCard: styled(Link) <{ $checked?: boolean }>`
    --grid_left_proportion: 85%;

${({ $checked, theme }) => {
      return css`--card_border: ${() => {
        let color = theme.palette.neutral[500];

        if ($checked) {
          color = theme.palette.positive[500];
        } else if ($checked === false) {
          color = theme.palette.negative[100];
        }

        return color;
      }};`
    }}

    aspect-ratio: 16 / 9;
    background-color: ${({ theme }) => theme.palette.neutral[200]};
    border-radius: 0.8rem;
    box-shadow: inset 0 0 0 2px var(--card_border);
    color: ${({ theme }) => theme.palette.neutral[900]};
    display: grid;
    grid-template-columns: var(--grid_left_proportion) calc(100% - var(--grid_left_proportion));
    height: auto;
    text-decoration: none;
    width: 100%;

    & > * {
      flex: 1;
      padding: 0.75rem;

      &:nth-child(1) {
        align-items: flex-start;
        justify-content: flex-star;
      }
      &:nth-child(2) {
        align-items: flex-start;
        justify-content: flex-end;
      }
      &:nth-child(3) {
        align-items: flex-end;
        justify-content: flex-start;
      }
      &:nth-child(4) {
        align-items: flex-end;
        justify-content: flex-end;
      }
    }
  `,
  DashboardCardWord: styled.h3`
    ${({ theme }) => theme.font.heading.s};
    color: inherit;
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  DashboardCardAttempts: styled.span<{ $total: number }>`
    ${({ theme }) => theme.font.text.m};
    --card_attempts_c: ${({ theme }) => theme.palette.neutral[900]};

    ${({ $total }) => {
      if ($total <= 0) {
        return css`--card_attempts_c: ${({ theme }) => theme.palette.negative[100]};`
      } else if ($total <= 2) {
        return css`--card_attempts_c: ${({ theme }) => theme.palette.negative[300]};`
      } else if ($total <= 4) {
        return css`--card_attempts_c: ${({ theme }) => theme.palette.negative[500]};`
      }
    }}

    color: var(--card_attempts_c);
    display: flex;
    font-size: 1.2em;
  `,
  DashboardCardHints: styled.small`
    ${({ theme }) => theme.font.text.s};
    color: ${({ theme }) => theme.palette.neutral[700]};
    display: flex;
  `,
  DashboardCardIcon: styled.span`
    ${({ theme }) => theme.font.text.l};
    color: var(--card_border);
    display: flex;
  `,
}

interface IDashboardCard {
  word: string;
  attempts: number;
  hint: string;
  win?: boolean;
  game_id: string;
}

const LayoutComponents = {
  DashboardCard: ({ word = '', attempts = 5, hint = '', win, game_id }: IDashboardCard) => (
    <S.DashboardCard $checked={attempts > 0 && win} href={`/dashboard/games/${game_id}`}>
      <S.DashboardCardWord>{word}</S.DashboardCardWord>
      <S.DashboardCardAttempts $total={attempts}>{attempts}</S.DashboardCardAttempts>
      <S.DashboardCardHints>{hint}</S.DashboardCardHints>
      <S.DashboardCardIcon>
        {attempts > 0 && win === undefined && <FaGamepad />}
        {attempts > 0 && win === true && <FaCircleCheck />}
        {(attempts <= 0 || win === false) && <FaCircleXmark />}
      </S.DashboardCardIcon>
    </S.DashboardCard>
  )
}

export const Default: StoryObj<typeof LayoutComponents.DashboardCard> = {
  args: {
    word: 'Hortelã',
    attempts: 5,
    hint: 'Alimento',
    game_id: '123'
  }
};

const meta: Meta<typeof LayoutComponents.DashboardCard> = {
  argTypes: { win: { type: 'boolean' } },
  component: LayoutComponents.DashboardCard,
};

export default meta;
