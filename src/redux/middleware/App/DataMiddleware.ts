import { Action } from '../../Types';
import { CounterAction, DataAction, SelectAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { loadDataFirebase, setData } from '../../actions/DataAction';
import { addOrdersFunc } from '../../../functions/compareAndMerge';
import { resetCount } from '../../actions/CounterAction';
import { Bucket } from '../../reducers/DataReducer';
const store = window.localStorage.getItem('storeName');
const table = window.localStorage.getItem('table');

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const DataMiddleware = ({ dispatch, getState }: param) => (
    next:any
) => ( action: Action ) => {

    next(action);

    if(DataAction.Types.LOAD_DATA_FIREBASE === action.type && store !== null) {
        console.log('load data')
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .onSnapshot((doc:any) => {
                const data = doc.data();
                dispatch(setData(data));
            });
    };
    if(DataAction.Types.ADD_BUCKET_MENU === action.type) {
        const select = action.payload.select;
        var morePrice = select.price;
        const options = getState().Select.options;
        options.forEach((doc:any) => { morePrice += doc.price});
        const count = getState().Counter.count;
        const Obj = {
            name: select.name,
            price: select.price,
            options: getState().Select.options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            itemTotalPrice: (morePrice) * count
        };
        const bucket = addOrdersFunc( getState().Data.data.bucket, Obj);
        const totalPrice = getState().Data.data.totalPrice + Obj.itemTotalPrice;
        console.log('BUCKET TEST',bucket)
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...bucket
                ],
                'totalPrice': totalPrice
            }).then(() => {
                dispatch(CounterAction.resetCount());
                dispatch(SelectAction.resetSelect());
                dispatch(SelectAction.resetOption());
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.MODIF_BUCKET_MENU_DECREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        const count = select.count - 1;
        var morePrice = select.price;
        select.options.forEach((doc:any) => { morePrice += doc.price; });
        const itemTotalPrice = select.itemTotalPrice - morePrice;
        console.log(itemTotalPrice);
        console.log(select.itemTotalPrice)
        const Obj = {
            name:select.name,
            price:select.price,
            options:select.options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            itemTotalPrice: itemTotalPrice 
        };
        const modifBuc = bucket.map((item:Bucket) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.totalPrice - morePrice;
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...modifBuc
                ],
                'totalPrice': totalPrice
            }).then(() => {
                dispatch(CounterAction.resetCount());
            }).catch((e) => console.log(e));

    }
    if(DataAction.Types.MODIF_BUCKET_MENU_INCREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        var morePrice = select.price;
        select.options.forEach((doc:any) => { morePrice += doc.price;});
        const count = select.count + 1;
        const itemTotalPrice = select.itemTotalPrice + morePrice;
        const Obj = {
            name:select.name,
            price:select.price,
            options:select.options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            itemTotalPrice: itemTotalPrice 
        };
        const modifBuc = bucket.map((item:any) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.totalPrice + morePrice;
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...modifBuc
                ],
                'totalPrice': totalPrice
            }).then(() => {
                dispatch(CounterAction.resetCount());
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.DELETE_MENU === action.type) {
        const bucket = getState().Data.data.bucket.filter((doc:Bucket) => doc.id !== action.payload.id);
        const totalPrice = getState().Data.data.totalPrice - action.payload.itemTotalPrice;
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...bucket
                ],
                'totalPrice': totalPrice
            }).then(() => {
                dispatch(CounterAction.resetCount());
            }).catch((e) => console.log(e));


    };
    if(DataAction.Types.RESER_BUCKET === action.type ) {
        dbService
            .collection(`${store}`)
            .doc(`${table}`)
            .update({
                'bucket':[],
                'totalPrice': 0
            }).then(() => {
                dispatch(CounterAction.resetCount());
            }).catch((e) => console.log(e));
    }
};