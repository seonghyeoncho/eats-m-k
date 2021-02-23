import { ActionCreator } from '../Types';

export enum Types {
  SET_LOCATION = '[Location] set current location',
  INIT_LOCATION = '[Location] initiate current location',
};

export const setLocation: ActionCreator = ( 
  storeId: string, 
  tableId: string 
) => {
  return {
    type: Types.SET_LOCATION,
    payload: {
      storeId: storeId,
      tableId: tableId
    },
  };
}
export const initiateLocation: ActionCreator = ( 
  storeId:string, 
  tableId:string 
) => {
  return {
    type: Types.INIT_LOCATION,
    payload: {
      storeId: storeId,
      tableId: tableId
    },
  };
}
