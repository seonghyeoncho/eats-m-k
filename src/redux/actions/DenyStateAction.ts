import { ActionCreator } from '../Types';

export enum Types {
    S_CHECK_DENY_STATE = '[Deny] set deny state',
};

export const setCheckDenyState: ActionCreator = () => {
    return {
        type:Types.S_CHECK_DENY_STATE,
        payload: null
    }
}