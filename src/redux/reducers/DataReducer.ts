import { DataAction } from '../actions';
import { Action } from '../Types';

interface Option {
    menu:string,
    price:number,
};
export interface Bucket {
    name: string;
    id: string;
    price: number;
    option:Option[]
    itemTotalPrice:number,
    count:number

};
interface Receipt {
    menu:string,
    price:number,
};

export interface Data {
    data: {
        bucket: Bucket[],
        receipt: Receipt[],
        totalPrice: number,
        receiptTotalPrice: number,
        state:boolean,
        orderStatus:boolean
    }
};

const initialState: Data = {
    data: {
        bucket:[],
        receipt: [],
        totalPrice: 0,
        receiptTotalPrice: 0,
        state: false,
        orderStatus: false,
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