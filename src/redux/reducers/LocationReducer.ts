import { LocationAction } from '../actions';
import { Action } from '../Types';

export interface Location {
    storeId: string | string[] | null;
    tableId: string | string[] | null;
}

const initialState: Location = {
    storeId: null,
    tableId: null
};

const LocationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LocationAction.Types.SET_LOCATION:
      return {
        ...state,
        storeId: action.payload.storeId, 
        tableId: action.payload.tableId
      };
    default:
      return state;
  };
};
export default LocationReducer;