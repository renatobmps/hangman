export interface ILoginFormProps {
  fieldState: {
    user: string;
    password: string;
  };
  handleFields: any;
}

export interface IGameKeyboardProps {
  alreadyTried: string[];
  handleKeyboardButton: (event: any) => void;
  isBlocked: boolean;
}

export interface IGameDataProps {
  gameData: {
    lives: number;
    word: string;
    hint: string;
    difficult: number;
    triedLetters: string[];
    performance: {
      game: {
        won: {
          total: number;
        };
      };
    };
  };
  isLoading?: boolean;
}

export interface IFlexColumnStyle {
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
}

export interface ICreateUserFormProps {
  fieldState: {
    name: string;
    password: string;
    confirm: string;
  };
  handleFields: any;
}

export interface IGameState {
  description: string;
  difficult: number;
  hint: string;
  lives: number;
  points: number;
  state: string;
  triedLetters: string[];
  user: string;
  word: string;
  ranking: IGameDataRanking[];
  performance: IGameDataRankingPerformance;
}

export interface IGameDataRanking {
  name: string;
  performance: IGameDataRankingPerformance;
}

export interface IGameDataRankingPerformance {
  game: {
    won: {
      total: number;
      percentage?: number;
    };
  };
  letterPrecision: {
    won: {
      percentage: number;
    };
  };
}
