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
        const storeName = getState().Store.information.name;
        const table = getState().Location.table;
        const bucket = getState().Data.data.bucket;
        const totalPrice = getState().Data.data.totalPrice;
        const receiptTotalPrice = getState().Data.data.receiptTotalPrice;
        const receipt = getState().Data.data.receipt;

        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .update({
                'order':[
                    ...bucket
                ],
                'bucket':[],
                'receipTtotalPrice':receiptTotalPrice + totalPrice,
                'totalPrice':0,
                'receipt':[
                    ...receipt.concat(bucket)
                ],
                'order_status':true,
                'state':false
            })
            .then(() => {
                dispatch(loadDataFirebase());
            })
            .catch((e) => console.log(e));
    };
};