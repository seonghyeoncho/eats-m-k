import { Action } from '../../Types';
import { OrderAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { loadDataFirebase } from '../../actions/DataAction';

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const OrderMiddleware = ({ dispatch, getState }: param) => (
    next:any
) => ( action:Action ) => {

    next(action);

    if(OrderAction.Types.ADD_NEW_ORDER === action.type) {
        const storeName = window.localStorage.getItem('storeName');
        const table = window.localStorage.getItem('table');
        const bucket = getState().Data.data.bucket;
        const totalPrice = getState().Data.data.totalPrice;
        const receiptTotalPrice = getState().Data.data.receipttotalprice;
        const receipt = getState().Data.data.receipt;
        const newReceipt = receipt.concat(bucket);

        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .update({
                'bucket':[],
                'receipt_total_price':receiptTotalPrice + totalPrice,
                'total_price':0,
                'receipt':[
                    ...newReceipt
                ],
                'order_state':true,
                'state':false
            })
            .then(() => {
                dispatch(loadDataFirebase());
            })
            .catch((e) => console.log(e));
    };
};