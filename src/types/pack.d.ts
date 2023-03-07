declare type TPack = {
  id: number;
  name: string;
  author: string;
  rounds: TRound[];
}

declare type TRound = {
  id: number;
  name: string;
  is_final: boolean;
  themes: TTheme[];
}

declare type TTheme = {
  id: number;
  name: string;
  questions: TQuestion[];
}

declare type TQuestion = {
  id: number
  type: EQuestionType;
  cost: number;
  text: string;
  answers: string;
}

declare enum EQuestionType {
  Default = 'default',
  Auction = 'auction',
  Secret = 'secret',
  CatInBag = 'catInBag',
  NoRisk = 'noRisk',
}