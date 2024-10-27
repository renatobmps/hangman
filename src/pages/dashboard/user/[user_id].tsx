import styled, { css } from "styled-components"
import Logo from './logo.svg'
import Image from "next/image"
import { FaUserNinja, FaUser, FaGamepad, FaCircleCheck, FaCircleXmark, FaCheck, FaBars } from "react-icons/fa6";
import Link from "next/link"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

interface Ssr {
  user_id: number;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext<{ user_id: `${number}` }>): Promise<GetServerSidePropsResult<Ssr>> => {
  const { user_id = '0' } = ctx.params!;

  if (isNaN(Number(user_id))) {
    return { notFound: true }
  }

  return { props: { user_id: Number(user_id) } }
}

const S = {
  Layout: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    width: min(100%, 100vw);
  `,
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
  Panel: styled.main`
    box-shadow: inset 0 2px 4px 0px rgba(0, 0, 0, 0.1);
    background: white;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 1rem;
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
  GameSection: styled.section``,
  GameTitle: styled.h2``,
  GamesGrid: styled.section`
    display: grid;
    gap: 0.3rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    &>*{
      font-size: 1.2rem;
      &:nth-child(1) {
      &.playing {
        @media (min-width: 548px) {
          font-size: 2.4rem;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
        }
      }
    }}
  `,
  Game: styled.div<{ $checked?: boolean }>`
    aspect-ratio: 16 / 9;
    border-radius: 0.8rem;
    box-shadow: inset 0 0 0 2px ${({ $checked }) => {
      let color = 'gray';

      if ($checked) {
        color = 'green';
      } else if ($checked === false) {
        color = 'red';
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
      let color = 'black';

      if ($total <= 2) {
        color = 'red';
      } else if ($total <= 4) {
        color = 'orange';
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
      let color = 'black';

      if ($checked === false) {
        color = 'red';
      }

      if ($checked === true) {
        color = 'green';
      }

      return css`
        color: ${color};
      `;
    }}
  `,
  Log: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  LogTitle: styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  LogPanel: styled.div`
    background: #D9D9D9;
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
}

const SCheckbox = {
  Container: styled.label<{ $checked: boolean }>`
    aspect-ratio: 1;
    background-color: ${({ $checked = false }) => $checked ? 'var(--color-1)' : 'transparent'};
    box-shadow: inset 0 0 0 1px gray;
    border-radius: 3px;
    color: white;
    display: grid;
    font-size: calc(var(--checkbox-size, 1rem) - 1px);
    height: var(--checkbox-size, 1rem);
    overflow: hidden;
    place-items: center;
  `,
  Checkbox: styled.input`
    display: none;

    &:checked ~ span {
      opacity: 1;
      visibility: visible;
    }
  `,
  Checkmark: styled.span`
    color: inherit;
    font-size: inherit;
    opacity: 0;
    visibility: hidden;
  `,
}

const Checkbox = (props: { text?: string, checked?: boolean }) => (
  <SCheckbox.Container $checked={!!props.checked}>
    <SCheckbox.Checkbox type="checkbox" checked={!!props.checked} />
    <SCheckbox.Checkmark><FaCheck /></SCheckbox.Checkmark>
  </SCheckbox.Container>
)


const Page = ({ user_id }: Ssr) => (
  <S.Layout>
    <S.Header>
      <S.Logo height={50} width={50} alt="Hangman" src={Logo.src} />
      <S.Navigation>
        <S.NavigationButton type="checkbox" hidden />
        <FaBars />
        <S.NavigationInner className="navigation_inner">
          <S.NavigationMenu href="/dashboard/hints">Hints</S.NavigationMenu>
          <S.NavigationMenu href="/dashboard/words">Words</S.NavigationMenu>
          <S.NavigationMenu href="/dashboard/games">Games</S.NavigationMenu>
          <S.NavigationMenu href="/dashboard/users">Users</S.NavigationMenu>
          <S.NavigationMenu href="/dashboard/exit">Exit</S.NavigationMenu>
        </S.NavigationInner>
      </S.Navigation>
    </S.Header>
    <S.Panel>
      <S.UserSection>
        <S.UserName>
          <h1>User {user_id}</h1>
          {user_id % 2 ? <FaUser /> : <FaUserNinja />}
        </S.UserName>
        <Checkbox checked={!!(user_id % 3)} />
      </S.UserSection>
      <S.GameSection>
        <S.GameTitle>Games</S.GameTitle>
        <S.GamesGrid>
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
        </S.GamesGrid>
      </S.GameSection>
      <S.Log>
        <S.LogTitle>Log</S.LogTitle>
        <S.LogPanel>
          <S.LogLine title={`User ${user_id} joined the game - 29/11/2023 14:45`}>
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
      </S.Log>
    </S.Panel>
  </S.Layout>
)

export default Page