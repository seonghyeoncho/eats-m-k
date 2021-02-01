import { ActionCreator } from '../Types';

export enum Types {
    ADD_NEW_ORDER = '[Order] add new order',
};

export const addOrder: ActionCreator = (bucket) => {
    return {
        type:Types.ADD_NEW_ORDER,
        payload: {
            bucket:bucket
        }
    };
};
