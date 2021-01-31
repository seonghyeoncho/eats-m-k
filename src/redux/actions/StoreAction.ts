import { ActionCreator } from '../Types';

export enum Types {
  SET_STORE_MENU = '[Store] set store menu',
  LOAD_STORE_FIREBASE = '[Store] load store from firebase',
};

export const setStoreMenu: ActionCreator = (menu) => {
  return {
    type: Types.SET_STORE_MENU,
    payload: {
      menu: menu,
    },
  };
};

export const loadStoreFirebase: ActionCreator = () => {
    return {
      type: Types.LOAD_STORE_FIREBASE,
      payload: null,
    };
};