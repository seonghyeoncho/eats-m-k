import { ActionCreator } from '../Types';

export enum Types {
    SET_BUCKET_MENU = '[Bucket] set bucket from firebase',
    ADD_BUCKET_MENU = '[Bucket] add bucket from firebase',
    MODIF_BUCKET_MENU_INCREASE = '[Bucket] modif bucket menu count increase',
    MODIF_BUCKET_MENU_DECREASE = '[Bucket] modif bucket menu count decrease',
    LOAD_DATA_FIREBASE = '[Bucket] load data from firebase',
    DELETE_MENU = '[Bucket] delete menu in bucket',
    RESER_BUCKET = '[Bucket] reset bucket' 
};

export const setData: ActionCreator = (data) => {
    return {
        type:Types.SET_BUCKET_MENU,
        payload: {
            data:data
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
export const loadDataFirebase: ActionCreator = () => {
    return {
        type: Types.LOAD_DATA_FIREBASE,
        payload: null,
    };
};
export const deleteBucket: ActionCreator = (id, itemTotalPrice) => {
    return {
        type:Types.DELETE_MENU,
        payload:{
            id:id,
            itemTotalPrice: itemTotalPrice
        }
    };
};
export const resetBucket: ActionCreator = () => {
    return {
        type: Types.RESER_BUCKET,
        payload: null
    };
};