import { Action } from '../../Types';
import { DataAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { setData } from '../../actions/DataAction';
import { addOrdersFunc } from '../../../functions/compareAndMerge';
import { Bucket } from '../../reducers/DataReducer';
const store = window.localStorage.getItem('store');
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
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .onSnapshot((doc:any) => {
                const data = doc.data();
                dispatch(setData(data));
            });
    };
    if(DataAction.Types.ADD_BUCKET_MENU === action.type) {
        const select = action.payload.select;
        let morePrice = select.price;
        const options = getState().Option.option
        options.forEach((doc:any) => doc.options.forEach((O:any) => {if(O.state) morePrice += O.price}));
        const count = getState().Counter.count;
        const Obj = {
            name: select.name,
            price: select.price,
            options: options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            item_total_price: (morePrice) * count,
            state:false
        };
        const bucket = addOrdersFunc( getState().Data.data.bucket, Obj);
        const totalPrice = getState().Data.data.total_price + Obj.item_total_price;
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...bucket
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.MODIF_BUCKET_MENU_DECREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        const count = select.count - 1;
        let morePrice = select.price;
        select.options.forEach((doc:any) => doc.options.forEach((O:any) => {if(O.state) morePrice += O.price}));
        const itemTotalPrice = select.item_total_price - morePrice;
        const Obj = {
            name:select.name,
            price:select.price,
            options:select.options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            item_total_price: itemTotalPrice,
            state:false
        };
        const modifBuc = bucket.map((item:Bucket) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.total_price - morePrice;
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...modifBuc
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    }
    if(DataAction.Types.MODIF_BUCKET_MENU_INCREASE === action.type) {
        const bucket = getState().Data.data.bucket;
        const select = action.payload.select
        const prevId = select.id;
        var morePrice = select.price;
        select.options.forEach((doc:any) => doc.options.forEach((O:any) => {if(O.state) morePrice += O.price}));
        const count = select.count + 1;
        const itemTotalPrice = select.item_total_price + morePrice;
        const Obj = {
            name:select.name,
            price:select.price,
            options:select.options,
            count: count,
            id:`${select.name}/${count}/${JSON.stringify(select.options)}`,
            item_total_price: itemTotalPrice,
            state:false
        };
        const modifBuc = bucket.map((item:any) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.total_price + morePrice;
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...modifBuc
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.DELETE_MENU === action.type) {
        const bucket = getState().Data.data.bucket.filter((doc:Bucket) => doc.id !== action.payload.id);
        const totalPrice = getState().Data.data.total_price - action.payload.item_total_price;
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[
                    ...bucket
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.RESER_BUCKET === action.type ) {
        dbService
            .collection('stores')
            .doc(`${store}`) 
            .collection('orders')
            .doc(`${table}`)
            .update({
                'bucket':[],
                'total_price': 0
            }).then(() => {
            }).catch((e) => console.log(e));
    }
};