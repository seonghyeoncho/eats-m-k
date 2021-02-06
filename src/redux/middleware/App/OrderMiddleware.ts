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
        console.log(receiptTotalPrice);
        console.log(totalPrice);
        const receipt = getState().Data.data.receipt;
        console.log(bucket);
        const newReceipt = receipt.concat(bucket);
        console.log(newReceipt);

        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .update({
                'order':[
                    ...bucket
                ],
                'bucket':[],
                'receipttotalprice':receiptTotalPrice + totalPrice,
                'totalPrice':0,
                'receipt':[
                    ...newReceipt
                ],
                'orderStatus':true,
                'state':false
            })
            .then(() => {
                dispatch(loadDataFirebase());
            })
            .catch((e) => console.log(e));
    };
};