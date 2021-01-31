import { LocationAction } from '../actions';
import { Action } from '../Types';

export interface Location {
    store: string;
    table: string;
}

const initialState: Location = {
    store: '',
    table: ''
};

const LocationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LocationAction.Types.SET_LOCATION:
      return {
          ...state,
        store: action.payload.store, 
        table: action.payload.table
      };
    default:
      return state;
  };
};
export default LocationReducer;