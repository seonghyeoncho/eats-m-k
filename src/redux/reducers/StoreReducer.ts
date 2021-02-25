import { StoreAction } from '../actions';
import { Action, Store } from '../Types';

const initialState: Store = {
  information: {
    name: '',
    id:'',
    bestPhotoUrl:'',
  },
  menu: {
    categories: [],
    optionGroups: [],
    items: [],
  },
};

const StoreReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case StoreAction.Types.SET_STORE_MENU:
      return {
        ...state,
        menu: action.payload.menu,
      };
    case StoreAction.Types.SET_STORE_INFO:
      return {
        ...state,
        information: {
          name:action.payload.name
        }
      }
    default:
      return state;
  };
};
export default StoreReducer;