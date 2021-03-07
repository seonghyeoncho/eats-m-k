import { DataAction, PaymentAction } from '../actions';
import { Action } from '../Types';

export interface Payment {
    payment:string
};
const initialState: Payment = {
    payment:'카드 결제'
};

const PaymentReducer = (state:Payment = initialState, action:Action) => {
    switch(action.type) {
        case PaymentAction.Types.S_PATMENT_TYPE:
            return {
                payment:action.payload.payment
            }
        default:
            return state;
    }
};
export default PaymentReducer;