import { DataAction } from '../actions';
import { Action } from '../Types';

interface Option {
    name:string,
    price:number,
};
export interface Bucket {
    name: string;
    id: string;
    price: number;
    options:Option[]
    item_total_price:number,
    count:number,
    state:boolean,

};
interface Receipt {
    order_time:string,
    state:string,
    receipt:Bucket[],
}
export interface Data {
    data: {
        bucket: Bucket[],
        receipt: Receipt[],
        total_price: number,
        receipt_total_price: number,
        state:boolean,
        order_state:boolean
    }
};

const initialState: Data = {
    data: {
        bucket:[],
        receipt: [],
        total_price: 0,
        receipt_total_price: 0,
        state: false,
        order_state: false,
    }
}
const DataReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case DataAction.Types.SET_BUCKET_MENU:
          return {
            ...state,
            data: action.payload.data,
          };
        default:
          return state;
      };
};

export default DataReducer;