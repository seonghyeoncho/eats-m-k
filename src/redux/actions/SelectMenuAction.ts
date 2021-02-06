import { ActionCreator } from '../Types';

export enum Types {
    SELECT_MENU = '[Select] select menu',
    SET_MENU = '[Select] set menu',
    RESET_SELECT = '[Select] reset select',
    RESET_OPTION = '[Select] reset option',
    SELECT_OPTION = '[Select] select options',
    DELETE_OPTION = '[Select] delete options',
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
export const selectOptoin: ActionCreator = (options) => {
    return {
        type:Types.SELECT_OPTION,
        payload: {
            options:options,
        }
    }
}
export const deleteOptoin: ActionCreator = (options) => {
    return {
        type:Types.DELETE_OPTION,
        payload: {
            options:options,
        }
    }
}
export const resetOption: ActionCreator = () => {
    return {
        type:Types.RESET_OPTION,
        payload: null,
    }
}


