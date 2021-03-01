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
export interface OptionGroup {
  id: number;
  name: string;
  maxSelect: number;
  options: Option[];
};
interface Item {
  name: string;
  price: number;
  description: string;
  categories: string[];
  optionGroups: string[];
  photoUrl:string
};

export interface Store {
  information: {
    name: string;
    id:string;
  };
  menu: {
    categories: Category[];
    optionGroups: OptionGroup[];
    items: Item[];
  },
};
