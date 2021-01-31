import { ActionCreator } from '../Types';

export enum Types {
    SET_BUCKET_MENU = '[Bucket] set bucket from firebase',
    ADD_BUCKET_MENU = '[Bucket] add bucket from firebase',
};

export const setData: ActionCreator = (data) => {
    return {
        type:Types.SET_BUCKET_MENU,
        payload: {
            data:data
        },
    };
};