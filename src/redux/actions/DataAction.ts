import { ActionCreator } from '../Types';

export enum Types {
    SET_BUCKET_MENU = '[Bucket] set bucket from firebase',
    ADD_BUCKET_MENU = '[Bucket] add bucket from firebase',
    MODIF_BUCKET_MENU_INCREASE = '[Bucket] modif bucket menu count increase',
    MODIF_BUCKET_MENU_DECREASE = '[Bucket] modif bucket menu count decrease',
    LOAD_DATA_FIREBASE = '[Bucket] load data from firebase',
    LOAD_DATA_FIREBASE_FOR_SELECT = '[Bucket] load data from firebase for detail',
    DELETE_MENU = '[Bucket] delete menu in bucket',
    RESER_BUCKET = '[Bucket] reset bucket' ,
    Q_DENY_STATE = '[Deny] query state'
};
export const queryDenyState: ActionCreator= () => {
    return {
        type:Types.Q_DENY_STATE,
        payload:null
    }
}
export const setData: ActionCreator = (data, tableNumber) => {
    return {
        type:Types.SET_BUCKET_MENU,
        payload: {
            data:data,
            tableNumber:tableNumber
        },
    };
};
export const addBucketMenu: ActionCreator = (select) => {
    return {
        type: Types.ADD_BUCKET_MENU,
        payload: {
            select:select
        },
    };
};
export const modifBucketIn: ActionCreator = (select) => {
    return {
        type:Types.MODIF_BUCKET_MENU_INCREASE,
        payload:{
            select:select
        },
    };
};
export const modifBucketDe: ActionCreator = (select) => {
    return {
        type:Types.MODIF_BUCKET_MENU_DECREASE,
        payload:{
            select:select
        },
    };
};
export const loadDataFirebase: ActionCreator = (storeId:string, tableId:string) => {
    return {
        type: Types.LOAD_DATA_FIREBASE,
        payload: {
            storeId:storeId,
            tableId:tableId
        },
    };
};
export const loadDataFirebaseForDetail: ActionCreator = (storeId:string, tableId:string, name:string) => {
    return {
        type: Types.LOAD_DATA_FIREBASE_FOR_SELECT,
        payload: {
            storeId:storeId,
            tableId:tableId,
            name:name
        },
    };
};
export const deleteBucket: ActionCreator = (id, itemTotalPrice) => {
    return {
        type:Types.DELETE_MENU,
        payload:{
            id:id,
            item_total_price: itemTotalPrice
        }
    };
};
export const resetBucket: ActionCreator = () => {
    return {
        type: Types.RESER_BUCKET,
        payload: null
    };
};