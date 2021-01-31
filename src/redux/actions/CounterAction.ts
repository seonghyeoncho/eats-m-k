import { ActionCreator } from '../Types';

export enum Types {
    INCREASE = '[Counter] increse count',
    DECREASE = '[Counter] decrese count',
    RESET_COUNT = '[Counter] reset count'
};
export const increase: ActionCreator = () => {
    return{
        type: Types.INCREASE,
        payload:null
    }
};
export const decrease: ActionCreator = () => {
    return{
        type: Types.DECREASE,
        payload:null
    }
};
export const resetCount: ActionCreator = () => {
    return{
        type: Types.RESET_COUNT,
        payload:null
    }
};
  
  