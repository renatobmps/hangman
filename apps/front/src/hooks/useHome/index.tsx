import React, { useEffect, useState, useContext } from 'react';
import { IGameDataRanking, IGameState } from '../../adapters/interfaces';
import { handleGameKeyboard } from '../../adapters/handleGameKeyboard';
import { UserContext } from '../../stores/UserContext';
import handleStarting from '../../hooks/useHome/handleStarting';

export type GameState = 'starting' | 'waiting' | 'checking' | 'won' | 'lost';

export default function useHome() {
  const userContext = useContext(UserContext);
  const initialGameData: IGameState = {
    description: '',
    difficult: 0,
    hint: '',
    lives: 0,
    points: 0,
    state: '',
    triedLetters: [],
    user: '',
    word: '',
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
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (!gameData.difficult && !gameData.word && !gameData.hint) {
      setGameData((current) => {
        return {
          ...current,
          difficult: 100,
          hint: 'Quem zerou o jogo? 👏',
          word: `${current.user ?? 'You'} 😎`,
          triedLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        };
      });
    }
  }, [gameData]);

  const [rankingState, setRankingState] = useState<IGameDataRanking[] | null>(
    null,
  );
  const [rankingTopTenState, setRankingTopTenState] = useState<
    IGameDataRanking[] | null
  >(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    const acceptLetters = 'abcdefghijklmnopqrstuvwxyz';
    if (!acceptLetters.includes(event.key)) return;
    handleGameKeyboard({
      letter: event.key,
      triedLettersList: gameData.triedLetters,
      buttonDom: document.querySelector(
        `[data-keyboard=${event.key}]`,
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

  const nextGame = () => {
    setOpenedModal(false);
    setGameState('starting');
  };

  const [gameState, setGameState] = useState<GameState>('starting');
  useEffect(() => {
    const stateHandlers: { [key in GameState]: () => void } = {
      starting: () => {
        handleStarting({
          setModalMessage,
          setModalOpen: setOpenedModal,
          setGameData,
          setGameState,
          setRankingData: setRankingState,
          setRankingTopTenData: setRankingTopTenState,
          setUserName: (username: string) =>
            userContext?.setUser ? userContext.setUser({ username }) : null,
        });
      },
      waiting: () => {
        if (!gameData.word) {
          window.location.reload();
        }
      },
      checking: () => {
        /* empty */
      },
      won: () => {
        const phrases = [
          `Parabéns, ${gameData.user}! 👏👏👏`,
          'Você acerta tudo, hein!',
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
          .join('\n');

        setModalMessage(finalPhrase);
        setOpenedModal(true);
        setRankingTopTenState(null);
        setRankingState(null);
      },
      lost: () => {
        const phrases = [
          'Oh não, você perdeu! 😥\nEssa palavra poderá voltar novamente depois, então boa sorte na próxima!',
          'Essa foi difícil, mas não desista, na próxima você consegue! 😜',
          '😿',
          'Essa eu também erraria! Não desanime! 😉',
        ];
        const somePhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setModalMessage(somePhrase);
        setOpenedModal(true);
        setRankingTopTenState(null);
        setRankingState(null);
      },
    };

    stateHandlers[gameState]();
  }, [gameState]);

  return {
    gameData,
    handleKeyDown,
    gameState,
    handleKeyClick,
    rankingTopTenState,
    rankingState,
    openedModal,
    modalMessage,
    nextGame,
  };
}
