import { ActionCreator } from '../Types';

export enum Types {
  SET_STORE_MENU = '[Store] set store menu',
  SET_STORE_INFO = '[Store] set store information',
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
export const setStoreInformation: ActionCreator = (
  name: string,
) => {
  return {
    type: Types.SET_STORE_INFO,
    payload: {
      name: name,
    },
  };
};
export const loadStoreFirebase: ActionCreator = () => {
  return {
    type: Types.LOAD_STORE_FIREBASE,
    payload: null,
  };
};