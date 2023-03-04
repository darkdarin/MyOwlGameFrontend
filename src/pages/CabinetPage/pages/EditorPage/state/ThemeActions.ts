export const THEME_CREATE = 'THEME/CREATE';
export const THEME_DELETE = 'THEME/DELETE';

export function themeCreate() {
    return {
        type: THEME_CREATE
    }
}

export function themeDelete() {
    return {
        type: THEME_DELETE
    }
}