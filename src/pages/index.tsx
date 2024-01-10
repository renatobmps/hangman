import React, { useEffect, useState, useContext } from "react";
import PageDefault from "../components/PageDefault";
import Keyboard from "../components/GameKeyboard";
import GameData from "../components/GameData";
import GameWrap from "../components/Style/GameWrap";
import { Modal } from "../components/Modal";
import { IGameDataRanking, IGameState } from "../adapters/interfaces";
import { GameRanking } from "../components/GameRanking";
import MainTitle from "../components/Style/MainTitle";
import { handleGameKeyboard } from "../adapters/handleGameKeyboard";
import { UserContext } from "../stores/UserContext";
import handleStarting from "./App/handleStarting";

export type GameState = "starting" | "waiting" | "checking" | "won" | "lost";

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
    rankingTopTen: [],
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

  useEffect(() => {
    console.clear();
    if (!gameData.difficult && !gameData.word && !gameData.hint) {
      setGameData((current) => {
        return {
          ...current,
          difficult: 100,
          hint: "Quem zerou o jogo? 👏",
          word: (current.user ?? "You") + " 😎",
          triedLetters: "abcdefghijklmnopqrstuvwxyz".split(""),
        };
      });
    }
    console.log({ gameData });
  }, [gameData]);

  const [rankingState, setRankingState] = useState<IGameDataRanking[] | null>(
    null
  );
  const [rankingTopTenState, setRankingTopTenState] = useState<
    IGameDataRanking[] | null
  >(null);

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

  const [gameState, setGameState] = useState<GameState>("starting");
  useEffect(() => {
    const stateHandlers: { [key in GameState]: () => void } = {
      starting: () =>
        handleStarting({
          setModalMessage,
          setModalOpen: setOpenedModal,
          setGameData,
          setGameState,
          setRankingData: setRankingState,
          setRankingTopTenData: setRankingTopTenState,
          setUserName: (username: string) =>
            userContext && userContext.setUser
              ? userContext.setUser({ username })
              : null,
        }),
      waiting: () => {},
      checking: () => {},
      won: () => {
        const phrases = [
          `Parabéns, ${gameData.user}! 👏👏👏`,
          "Você acerta tudo, hein!",
          `Boooooa, ${gameData.user}!! 😻`,
          `Só vejo esse nome subindo no ranking: ${gameData.user}! 😌`,
        ];
        const somePhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const finalPhrase = [
          `${somePhrase}`,
          `Encontrou: ${gameData.word.toUpperCase()}`,
          gameData.description,
          `Sua pontuação atual é: ${gameData.points + 1}`,
        ]
          .filter(Boolean)
          .join("\n");

        setModalMessage(finalPhrase);
        setOpenedModal(true);
        setRankingTopTenState(null);
        setRankingState(null);
        setGameState("starting");
      },
      lost: () => {
        const phrases = [
          "Oh não, você perdeu! 😥\nEssa palavra poderá voltar novamente depois, então boa sorte na próxima!",
          "Essa foi difícil, mas não desista, na próxima você consegue! 😜",
          "😿",
          "Essa eu também erraria! Não desanime! 😉",
        ];
        const somePhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setModalMessage(somePhrase);
        setOpenedModal(true);
        setRankingTopTenState(null);
        setRankingState(null);
        setGameState("starting");
      },
    };

    stateHandlers[gameState]();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  return (
    <PageDefault
      userData={{ name: gameData.user }}
      callbackKeydown={handleKeyDown}
    >
      <MainTitle>Jogo da forca</MainTitle>
      <GameWrap>
        <GameData isLoading={gameState === "starting"} gameData={gameData} />
        <hr />
        <Keyboard
          alreadyTried={gameData.triedLetters}
          handleKeyboardButton={handleKeyClick}
          isBlocked={gameState !== "waiting"}
        />
      </GameWrap>
      <GameRanking
        tableLabel="Os melhores dos últimos 7 dias"
        rankingData={rankingTopTenState}
      />
      <GameRanking tableLabel="Ranking geral" rankingData={rankingState} />
      <Modal
        isOpened={openedModal}
        closeFunction={setOpenedModal}
        message={modalMessage}
      />
    </PageDefault>
  );
}
