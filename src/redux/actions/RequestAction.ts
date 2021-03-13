import { ActionCreator } from '../Types';

export enum Types {
    S_REQUEST = '[Request] set requests'
};

export const setRequests: ActionCreator= (request: string) => {
    return{
        type:Types.S_REQUEST,
        payload:{
            request:request
        }
    }
}