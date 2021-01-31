import { ActionCreator } from '../Types';

export enum Types {
  SET_LOCATION = '[Location] set current location',
  INIT_LOCATION = '[Location] initiate current location',
};

export const setLocation: ActionCreator = ( store, table ) => {
  console.log('hello');
  return {
    type: Types.SET_LOCATION,
    payload: {
      store: store,
      table: table
    },
  };
}
export const initiateLocation: ActionCreator = ( store, table ) => {
  console.log('hello');
  return {
    type: Types.INIT_LOCATION,
    payload: {
      store: store,
      table: table
    },
  };
}
