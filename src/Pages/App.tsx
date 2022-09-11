import React, { useEffect, useState } from "react";
import PageDefault from "../Components/PageDefault";
import Keyboard from "../Components/GameKeyboard";
import GameData from "../Components/GameData";
import GameWrap from "../Components/Style/GameWrap";
import { Modal } from "../Components/Modal";
import { submitStartGame } from "../adapters/submitStartGame";
import { IGameState } from "../adapters/interfaces";
import { GameRanking } from "../Components/GameRanking";
import MainTitle from "../Components/Style/MainTitle";
import { handleGameKeyboard } from "../adapters/handleGameKeyboard";

export default function App() {
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
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState(initialGameData);
  const [newGame, setNewGame] = useState(initialGameData);
  const [openedModal, setOpenedModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  useEffect(() => {
    submitStartGame(
      setGameData,
      gameData,
      setLoading,
      setModalMessage,
      setOpenedModal
    );
  }, [newGame]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const acceptLetters = "abcdefghijklmnopqrstuvwxyz";
    if (!acceptLetters.includes(event.key)) return;
    handleGameKeyboard(
      event.key,
      gameData.triedLetters,
      document.querySelector(
        `[data-keyboard=${event.key}]`
      ) as HTMLButtonElement,
      gameData,
      setModalMessage,
      setOpenedModal,
      setNewGame
    );
  };

  const handleKeyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleGameKeyboard(
      event.currentTarget.innerText,
      gameData.triedLetters,
      event.currentTarget,
      gameData,
      setModalMessage,
      setOpenedModal,
      setNewGame
    );
  };

  return (
    <PageDefault
      userData={{
        name: gameData.user,
      }}
      callbackKeydown={handleKeyDown}
    >
      <MainTitle>Jogo da forca</MainTitle>
      <GameWrap>
        <GameData isLoading={loading} gameData={gameData} />
        <hr />
        <Keyboard
          setNewGame={setNewGame}
          alreadyTried={gameData.triedLetters}
          handleKeyboardButton={handleKeyClick}
        />
      </GameWrap>
      <GameRanking rankingData={gameData.ranking} />
      <Modal
        isOpened={openedModal}
        closeFunction={setOpenedModal}
        message={modalMessage}
      />
    </PageDefault>
  );
}
