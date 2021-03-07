import { ActionCreator } from '../Types';

export enum Types {
    S_PATMENT_TYPE = '[Payment] set payment',
};

export const setPayment:ActionCreator = (payment:string) => {
    return {
        type:Types.S_PATMENT_TYPE,
        payload:{
            payment:payment
        }
    }
}