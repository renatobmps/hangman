import styled, { css } from "styled-components";
import Image from "next/image";
import {
  FaUserNinja,
  FaUser,
  FaGamepad,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";
import Link from "next/link";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Layout, { LayoutComponents } from "../../../ui/layout";
import { InputComponents } from "../../../ui/shared/input";
import { useState } from "react";
import Grid from "@/ui/shared/grid";

interface Ssr {
  user_id: number;
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ user_id: `${number}` }>,
): Promise<GetServerSidePropsResult<Ssr>> => {
  const { user_id = "0" } = ctx.params!;

  if (isNaN(Number(user_id))) {
    return { notFound: true };
  }

  return { props: { user_id: Number(user_id) } };
};

const S = {
  Header: styled.header`
    align-items: center;
    background: white;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    padding: 1rem;
  `,
  Logo: styled(Image)`
    aspect-ratio: 1;
    display: block;
    height: calc(1rem * 4);
    width: auto;
  `,
  Navigation: styled.label`
    align-items: center;
    background: inherit;
    cursor: pointer;
    display: flex;
    gap: 0.5rem 0.25rem;
    position: relative;
    width: fit-content;
  `,
  NavigationButton: styled.input`
    & ~ svg {
      font-size: 1.2rem;

      @media (min-width: 615px) {
        display: none;
      }
    }
    &:checked ~ .navigation_inner {
      opacity: 1;
      visibility: visible;
    }
  `,
  NavigationInner: styled.nav`
    background: inherit;
    display: inherit;
    gap: inherit;
    transition: 0.6s;

    @media (max-width: 615px) {
      flex-direction: column;
      inset: 100% 0 auto auto;
      opacity: 0;
      padding: 0.25rem;
      position: absolute;
      visibility: hidden;
      z-index: 100;

      box-shadow: 0px 3px 3px -1px gray;
    }
  `,
  NavigationMenu: styled(Link)`
    background: transparent;
    border-radius: 0.5rem;
    color: black;
    text-decoration: none;
    transition: 0.6s;
    padding: 0.25rem 1rem;

    &:hover {
      background: #64646426;
    }
  `,
  UserSection: styled.section`
    --checkbox-size: 1.5rem;

    align-items: flex-end;
    display: flex;
    width: 100%;
  `,
  UserName: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  `,
  Game: styled.div<{ $checked?: boolean }>`
    aspect-ratio: 16 / 9;
    border-radius: 0.8rem;
    box-shadow: inset 0 0 0 2px
      ${({ $checked, theme }) => {
      let color = "gray";

      if ($checked && theme.palette.positive?.[500]) {
        color = theme.palette.positive[500];
      } else if ($checked === false) {
        color = "red";
      }

      return color;
    }};
    display: grid;
    grid-template-columns: 50% 50%;
    height: auto;
    width: 100%;

    & > * {
      display: flex;
      flex: 1;
      padding: 1rem;
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
  GameWord: styled.h3`
    font-size: 1.5em;
  `,
  GameAttempts: styled.span<{ $total: number }>`
    ${({ $total }) => {
      let color = "black";

      if ($total <= 2) {
        color = "red";
      } else if ($total <= 4) {
        color = "orange";
      }

      return css`
        color: ${color};
      `;
    }}

    font-size: 1.2em;
  `,
  GameHints: styled.small`
    color: gray;
    font-size: 0.8em;
  `,
  GameIcon: styled.span<{ $checked?: boolean }>`
    ${({ $checked }) => {
      let color = "black";

      if ($checked === false) {
        color = "red";
      }

      if ($checked === true) {
        color = "green";
      }

      return css`
        color: ${color};
      `;
    }}
  `,
  LogPanel: styled.div`
    background: #d9d9d9;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
  `,
  LogLine: styled.li`
    align-items: center;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    list-style: none;
    padding-block: 0.25rem;
    width: 100%;
  `,
  LogText: styled.p`
    color: #444;
    display: block;
    flex: 1;
    font-size: 1em;
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: fit-content;
  `,
  LogDate: styled.time`
    color: #444;
    display: block;
    font-size: 1em;
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: fit-content;
  `,
};

const Page = ({ user_id }: Ssr) => {
  const [isUserActivated, setIsUserActivated] = useState<boolean>(!!(user_id % 3));

  const handleUserActivated = () => {
    setIsUserActivated(prev => !prev);
  }

  return (
    <Layout.Dashboard>
      <LayoutComponents.Panel>
        <S.UserSection>
          <S.UserName>
            <h1>User {user_id}</h1>
            {user_id % 2 ? <FaUser /> : <FaUserNinja />}
          </S.UserName>
          <InputComponents.Checkbox checked={isUserActivated} onClick={handleUserActivated} />
        </S.UserSection>

        <LayoutComponents.Section title='Games' title_as="h2">
          <Grid.DashboardGrid>
            <S.Game className="playing">
              <S.GameWord>_o_t__ã</S.GameWord>
              <S.GameAttempts $total={5}>5</S.GameAttempts>
              <S.GameHints>Alimento</S.GameHints>
              <S.GameIcon>
                <FaGamepad />
              </S.GameIcon>
            </S.Game>
            <S.Game $checked={true}>
              <S.GameWord>hortelã</S.GameWord>
              <S.GameAttempts $total={4}>4</S.GameAttempts>
              <S.GameHints>Alimento</S.GameHints>
              <S.GameIcon $checked={true}>
                <FaCircleCheck />
              </S.GameIcon>
            </S.Game>
            <S.Game $checked={false}>
              <S.GameWord>_o_t__ã</S.GameWord>
              <S.GameAttempts $total={3}>3</S.GameAttempts>
              <S.GameHints>Alimento</S.GameHints>
              <S.GameIcon $checked={false}>
                <FaCircleXmark />
              </S.GameIcon>
            </S.Game>
            <S.Game $checked={true}>
              <S.GameWord>Groenlândia</S.GameWord>
              <S.GameAttempts $total={2}>2</S.GameAttempts>
              <S.GameHints>País</S.GameHints>
              <S.GameIcon $checked={true}>
                <FaCircleCheck />
              </S.GameIcon>
            </S.Game>
            <S.Game $checked={false}>
              <S.GameWord>_o_t__ã</S.GameWord>
              <S.GameAttempts $total={1}>1</S.GameAttempts>
              <S.GameHints>Alimento</S.GameHints>
              <S.GameIcon $checked={false}>
                <FaCircleXmark />
              </S.GameIcon>
            </S.Game>
          </Grid.DashboardGrid>
        </LayoutComponents.Section>

        <LayoutComponents.Section title="Log" title_as="h2">
          <S.LogPanel>
            <S.LogLine
              title={`User ${user_id} joined the game - 29/11/2023 14:45`}
            >
              <S.LogText>User {user_id} joined the game</S.LogText>
              <S.LogDate dateTime="2023-11-29T14:45">29/11/2023 14:45</S.LogDate>
            </S.LogLine>
            <S.LogLine>
              <S.LogText>User {user_id} submitted the word 'hortelã'</S.LogText>
              <S.LogDate dateTime="2023-11-29T14:45">29/11/2023 14:45</S.LogDate>
            </S.LogLine>
            <S.LogLine>
              <S.LogText>User {user_id} lost the game</S.LogText>
              <S.LogDate dateTime="2023-11-29T14:45">29/11/2023 14:45</S.LogDate>
            </S.LogLine>
          </S.LogPanel>
        </LayoutComponents.Section>
      </LayoutComponents.Panel>
    </Layout.Dashboard>
  )
};

export default Page;
