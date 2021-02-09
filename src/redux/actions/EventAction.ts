import { ActionCreator } from '../Types';

export enum Types {
    S_INIT_EVENT_STATE = '[Event] set evnet state',
    C_EVENT_TRIGGER = '[Event] commend event trigger',
    C_DETAIL_EVENT_TRIGGER = '[Event] commend detail event trigger'
};

export const eventTrigger:ActionCreator = () => {
    return {
        type:Types.C_EVENT_TRIGGER,
        payload:null
    }
};
export const initEventState: ActionCreator= (maxSelect:number) => {
    return {
        type:Types.S_INIT_EVENT_STATE,
        payload:{
            maxSelect: maxSelect
        }
    }
};

export const detailEventTrigger: ActionCreator = (maxSelect:number) => {
    return {
        type:Types.C_DETAIL_EVENT_TRIGGER,
        payload: {
            maxSelect: maxSelect
        }
    }
}