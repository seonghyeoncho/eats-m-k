import { Action } from '../../Types';
import { OrderAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { loadStoreFirebase } from '../../actions/StoreAction';
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
        const bucket = '';
        const totalPrice = getState().Data.data.totalPrice;
        const receiptTotalPrice = getState().Data.data.receiptTotalPrice;

        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .update({
                'order':bucket,
                'receipt_total_price':receiptTotalPrice + totalPrice,
                'totalPrice':0,
                'order_status':true,
            })
            .then(() => {
                dispatch(loadDataFirebase());
            })
            .catch((e) => console.log(e));
    };
};