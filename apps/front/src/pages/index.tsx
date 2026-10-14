import React, { useEffect, useState } from 'react';
import PageDefault from '../components/PageDefault';
import Keyboard from '../components/GameKeyboard';
import GameData from '../components/GameData';
import GameWrap from '../components/Style/GameWrap';
import { Modal } from '../components/Modal';
import { GameRanking } from '../components/GameRanking';
import useHome, { GameState as TGameState } from '../hooks/useHome';
import { Home } from '@design';

export type GameState = TGameState;

export default function App() {
  const [isMounted, setMounted] = useState(false);

  const {
    gameData,
    handleKeyDown,
    gameState,
    handleKeyClick,
    rankingTopTenState,
    rankingState,
    openedModal,
    modalMessage,
    nextGame,
  } = useHome();

  useEffect(() => setMounted(true), []);

  if (!isMounted) return <p>Carregando...</p>;

  return (
    isMounted && (
      <PageDefault
        userData={{ name: gameData.user }}
        callbackKeydown={handleKeyDown}
        seoConfig={{ title: 'Jogo' }}
      >
        <Home.Title>Jogo da forca</Home.Title>
        <GameWrap>
          <GameData isLoading={gameState === 'starting'} gameData={gameData} />
          <hr />
          <Keyboard
            alreadyTried={gameData.triedLetters}
            handleKeyboardButton={handleKeyClick}
            isBlocked={gameState !== 'waiting'}
          />
        </GameWrap>
        <GameRanking
          tableLabel="Os melhores dos últimos 7 dias"
          rankingData={rankingTopTenState}
        />
        <GameRanking tableLabel="Ranking geral" rankingData={rankingState} />
        <Modal
          isOpened={openedModal}
          closeFunction={nextGame}
          message={modalMessage}
        />
      </PageDefault>
    )
  );
}
