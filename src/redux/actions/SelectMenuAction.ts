import { ActionCreator } from '../Types';

export enum Types {
    SELECT_MENU = '[Select] select menu',
    SET_MENU = '[Select] set menu',
    RESET_SELECT = '[Select] reset select',
};

export const setMenu: ActionCreator = (menu, count, options) => {
    return {
        type:Types.SET_MENU,
        payload: {
            menu:menu,
            count:count,
            options:options,
        }
    };
};
export const selectMenu: ActionCreator = (select) => {
    return {
        type:Types.SELECT_MENU,
        payload: {
            select:select
        }
    };
};
export const resetSelect: ActionCreator = () => {
    return {
        type:Types.SELECT_MENU,
        payload: null
    };
};


