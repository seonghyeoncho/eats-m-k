import { ActionCreator } from '../Types';

export enum Types {
    C_GLOBAL_LOADING_SUCCESS = '[Global Loading] commend global loading',
    S_GLOBAL_LOADING_SUCCESS = '[Global Loading] set global loading',

};

export const commendGlobalLoading: ActionCreator= () => {
    return {
        type:Types.C_GLOBAL_LOADING_SUCCESS,
        payload:null
    }
};
export const setGlobalLoading: ActionCreator = (loadingState:boolean) => {
    return {
        type:Types.S_GLOBAL_LOADING_SUCCESS,
        payload:{
            loadingState:loadingState,
        }
    }
}