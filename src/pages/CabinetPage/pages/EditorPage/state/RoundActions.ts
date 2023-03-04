export const ROUND_CREATE = 'ROUND/CREATE';
export const ROUND_DELETE = 'ROUND/DELETE';

export function roundCreate() {
    return {
        type: ROUND_CREATE
    }
}

export function roundDelete() {
    return {
        type: ROUND_DELETE
    }
}