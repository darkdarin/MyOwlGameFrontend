export const QUESTION_CREATE = 'QUESTION/CREATE';
export const QUESTION_DELETE = 'QUESTION/DELETE';

export function questionCreate() {
    return {
        type: QUESTION_CREATE
    }
}

export function questionDelete() {
    return {
        type: QUESTION_DELETE
    }
}