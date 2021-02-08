import { ActionCreator } from '../Types';

export enum Types {
    C_INIT_SELECT_OPTION = '[Option] commend init select option',
    C_SELECT_OPTION = '[Option] commend select option',
    S_SELECT_OPTION = '[Option] set select option',
    C_RESET_OPTION = '[Option] commend reset option',
};

interface Option {
    name: string;
    price: number;
    state:boolean;
};
interface SelectedOption {
    name: string,
    maxSelect: number,
    options: Option[],
}

export const commendSelectOption: ActionCreator = (name: string, maxSelect: number, state: boolean) => {
    return {
        type: Types.C_SELECT_OPTION,
        payload:{
            name:name,
            maxSelect:maxSelect,
            state:state
        }
    }
};
export const setSelectOption: ActionCreator = (option:SelectedOption[] ) => {
    return {
        type: Types.S_SELECT_OPTION,
        payload: {
            option:option
        }
    }
};
export const commendResetSelectOption: ActionCreator = () => {
    return {
        type: Types.C_RESET_OPTION,
        payload: null
    }
};
export const commendInitSelectOtpion: ActionCreator = (optionGroups: string[]) => {
    return {
        type: Types.C_INIT_SELECT_OPTION,
        payload: {
            optionGroups: optionGroups,
        }
    }
};
