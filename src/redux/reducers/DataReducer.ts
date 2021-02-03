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
    itemTotalPrice:number,
    count:number

};
export interface Data {
    data: {
        bucket: Bucket[],
        receipt: Bucket[],
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