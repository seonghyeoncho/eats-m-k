import { Action } from '../../Types';
import { DataAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { addBucketMenu, setData } from '../../actions/DataAction';
import { addOrdersFunc } from '../../../functions/compareAndMerge';
import { resetCount } from '../../actions/CounterAction';

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const DataMIddleware = ({ dispatch, getState }: param) => (
    next:any
) => ( action: Action ) => {

    next(action);

    if(DataAction.Types.LOAD_DATA_FIREBASE === action.type ) {
        const storeName = getState().Store.information.name;
        const table = getState().Location.table;
        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .onSnapshot((doc:any) => {
                const data = doc.data();
                dispatch(setData(data));
            });
    };
    if(DataAction.Types.ADD_BUCKET_MENU === action.type) {
        const storeName = getState().Store.information.name;
        const table = getState().Location.table;
        const bucket = addOrdersFunc( getState().Data.data.bucket, action.payload.select );
        const totalPrice = getState().Data.data.totalPrice + action.payload.select.itemTotalPrice;
        dbService
            .collection(`${storeName}`)
            .doc(`${table}`)
            .update({
                'bucket':bucket,
                'totalPrice': totalPrice
            }).then(() => {
                dispatch(resetCount());
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.MODIF_BUCKET_MENU_DECREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        const count = select.count - 1;
        var moreprice = select.price;
        select.options.forEach((doc:any) => { moreprice += doc.price; });
        const itemTotalPrice = select.itemtTotalPrice - moreprice;
        const Obj = {
            ...select,
            count: count,
            id:`${select.menu}/${count}/${JSON.stringify(select.options)}`,
            itemTotalPrice: itemTotalPrice 
        };
        const modifBuc = bucket.map((item:any) => item.id === prevId ? Obj : item);
        dispatch(addBucketMenu(modifBuc));

    }
    if(DataAction.Types.MODIF_BUCKET_MENU_INCREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        var moreprice = select.price;
        select.options.forEach((doc:any) => { moreprice += doc.price;});
        const count = select.count + 1;
        const itemTotalPrice = select.itemtTotalPrice + moreprice;
        const Obj = {
            ...select,
            count: count,
            id:`${select.menu}/${count}/${JSON.stringify(select.options)}`,
            itemTotalPrice: itemTotalPrice 
        };
        const modifBuc = bucket.map((item:any) => item.id === prevId ? Obj : item);
        dispatch(addBucketMenu(modifBuc));
    }
};