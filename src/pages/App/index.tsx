import React, { useEffect, useState, useContext } from "react";
import PageDefault from "../../components/PageDefault";
import Keyboard from "../../components/GameKeyboard";
import GameData from "../../components/GameData";
import GameWrap from "../../components/Style/GameWrap";
import { Modal } from "../../components/Modal";
import { IGameDataRanking, IGameState } from "../../adapters/interfaces";
import { GameRanking } from "../../components/GameRanking";
import MainTitle from "../../components/Style/MainTitle";
import { handleGameKeyboard } from "../../adapters/handleGameKeyboard";
import { UserContext } from "../../stores/UserContext";
import handleStarting from "./handleStarting";

export type GameState = 'starting' | 'waiting' | 'checking' | 'won' | 'lost';

export default function App() {
  const userContext = useContext(UserContext);
  const initialGameData: IGameState = {
    description: "",
    difficult: 0,
    hint: "",
    lives: 0,
    points: 0,
    state: "",
    triedLetters: [],
    user: "",
    word: "",
    ranking: [],
    performance: {
      game: {
        won: {
          total: 0,
        },
      },
      letterPrecision: {
        won: {
          percentage: 0,
        },
      },
    },
  };
  const [gameData, setGameData] = useState(initialGameData);
  const [openedModal, setOpenedModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [rankingState, setRankingState] = useState<IGameDataRanking[] | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    const acceptLetters = "abcdefghijklmnopqrstuvwxyz";
    if (!acceptLetters.includes(event.key)) return;
    handleGameKeyboard({
      letter: event.key,
      triedLettersList: gameData.triedLetters,
      buttonDom: document.querySelector(
        `[data-keyboard=${event.key}]`
      ) as HTMLButtonElement,
      gameDataState: gameData,
      setModalMessage,
      setOpenedModal,
      setGameData,
      setGameState,
    });
  };

  const handleKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleGameKeyboard({
      letter: event.currentTarget.innerText,
      triedLettersList: gameData.triedLetters,
      buttonDom: event.currentTarget,
      gameDataState: gameData,
      setModalMessage,
      setOpenedModal,
      setGameData,
      setGameState,
    });
  };

  const [gameState, setGameState] = useState<GameState>('starting');
  useEffect(() => {
    const stateHandlers: { [key in GameState]: () => void } = {
      starting: () => handleStarting({
        setModalMessage,
        setModalOpen: setOpenedModal,
        setGameData,
        setGameState,
        setRankingData: setRankingState,
        setUserName: (username: string) => userContext.setUser({ username }),
      }),
      waiting: () => {
      },
      checking: () => {
      },
      won: () => {
        const finalPhrase = [
          `Parabéns, ${gameData.user}!`,
          `Encontrou: ${gameData.word}`,
          gameData.description,
          `Sua pontuação atual é: ${gameData.points + 1}`,
        ].filter(Boolean).join('\n');

        setModalMessage(finalPhrase);
        setOpenedModal(true);
        setRankingState(null);
        setGameState('starting');
      },
      lost: () => {
        setModalMessage('Oh não, você perdeu! Essa palavra poderá voltar novamente depois, então boa sorte na próxima!');
        setOpenedModal(true);
        setRankingState(null);
        setGameState('starting');
      },
    };

    stateHandlers[gameState]();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  return (
    <PageDefault
      userData={{ name: gameData.user }}
      callbackKeydown={gameState === 'waiting' ? handleKeyDown : () => { }}
    >
      <MainTitle>Jogo da forca</MainTitle>
      <GameWrap>
        <GameData isLoading={gameState === 'starting'} gameData={gameData} />
        <hr />
        <Keyboard
          alreadyTried={gameData.triedLetters}
          handleKeyboardButton={handleKeyClick}
          isBlocked={gameState !== 'waiting'}
        />
      </GameWrap>
      <GameRanking rankingData={rankingState} />
      <Modal
        isOpened={openedModal}
        closeFunction={setOpenedModal}
        message={modalMessage}
      />
    </PageDefault>
  );
}
