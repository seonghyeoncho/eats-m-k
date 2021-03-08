import { ActionCreator } from '../Types';

export enum Types {
  SET_STORE_MENU = '[Store] set store menu',
  SET_STORE_INFO = '[Store] set store information',
  LOAD_STORE_FIREBASE = '[Store] load store from firebase',
  LOAD_STORE_FIREBASE_FOR_SELECT = '[Store] load store from firebase for detail refreash'
};

export const setStoreMenu: ActionCreator = (menu) => {
  return {
    type: Types.SET_STORE_MENU,
    payload: {
      menu: menu,
    },
  };
};
export const setStoreInformation: ActionCreator = (
  name: string,
  id:string,
  bestPhotoUrl:string
) => {
  return {
    type: Types.SET_STORE_INFO,
    payload: {
      name: name,
      id:id,
      bestPhotoUrl:bestPhotoUrl
    },
  };
};
export const loadStoreFirebase: ActionCreator = (storeId:string, tableId:string) => {
  return {
    type: Types.LOAD_STORE_FIREBASE,
    payload: {
      storeId:storeId,
      tableId:tableId
    },
  };
};
export const loadStoreFirebaseForDetail: ActionCreator = (storeId:string, tableId:string, name:string) => {
  return {
    type: Types.LOAD_STORE_FIREBASE_FOR_SELECT,
    payload: {
      storeId:storeId,
      tableId:tableId,
      name:name
    },
  };
};
