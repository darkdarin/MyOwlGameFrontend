declare type TElementWithId = {
    id: number;
}

declare type TPack = {
    name: string;
    author: string;
    rounds: Array<TRound>;
}

declare type TRound = TElementWithId & {
    name: string;
    is_final?: boolean;
    themes: Array<TTheme>;
}

declare type TTheme = TElementWithId & {
    id: number;
    name: string;
    questions: Array<TQuestion>;
}

declare type TQuestion = TElementWithId & {
    id: number
    type: string;
    cost: number;
    text: string;
    answer: string;
}