import { StoreAction } from '../actions';
import { Action } from '../Types';

interface Category {
    id: number;
    name: string;
    description: string;
};
interface Option {
    name: string;
    price: number;
};
interface OptionGroup {
    id: number;
    name: string;
    maxSelect: number;
    options: Option[];
};
interface Item {
    name: string;
    price: string;
    description: string;
    categories: number[];
    optionGroups: number[];
};

export interface Store {
  information: {
    name: string;
  };
  menu: {
    categories: Category[];
    optionGroups: OptionGroup[];
    item: Item[];
  },
};

const initialState: Store = {
  information: {
    name: ''
  },
  menu: {
    categories: [],
    optionGroups: [],
    item: [],
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