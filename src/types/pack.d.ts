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
  type: string;
  cost: number;
  text: string;
  answers: string;
}