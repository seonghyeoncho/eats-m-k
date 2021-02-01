export interface Action {
    type: string;
    payload: any;
};
  
export interface ActionCreator {
    (...param: any): { type: string; payload: any };
};
interface Category {
    id: number;
    name: string;
    description: string;
};
export interface Option {
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
    price: number;
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
    items: Item[];
  },
};