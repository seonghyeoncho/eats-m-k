import { Action } from '../../Types';
import { DataAction, SelectAction } from '../../actions';
import { dbService } from '../../../firebase/firebase';
import { RootState } from '../..';
import { setData } from '../../actions/DataAction';
import { addOrdersFunc } from '../../../functions/compareAndMerge';
import { Bucket } from '../../reducers/DataReducer';
import { makeId } from '../../../functions/makeId';

interface param {
    dispatch: any;
    getState: () => RootState;
};

export const DataMiddleware = ({ dispatch, getState }: param) => (
    next:any
) => ( action: Action ) => {

    next(action);

    const bucket = getState().Data.data.bucket;
    const storeId = getState().Location.storeId;
    const tableId = getState().Location.tableId;
    if(DataAction.Types.LOAD_DATA_FIREBASE === action.type) {
        dbService
            .collection('stores')
            .doc(`${action.payload.storeId}`) 
            .collection('orders')
            .doc(`${action.payload.tableId}`)
            .onSnapshot((doc:any) => {
                const data = doc.data();
                let price = 0;
                data.receipt.forEach((receipts:any) => {
                    receipts.receipts.forEach((item:any) => {
                        if(item.state === "주문 완료" || item.state === "접수 완료") price += item.item_total_price;
                    })
                })
                const newData = {
                    ...data,
                    receipt_total_price: price
                }
                dispatch(setData(newData, newData.table_number));
            });
            if(storeId !== null) {
                window.localStorage.setItem("storeId", JSON.stringify(storeId));
                window.localStorage.setItem("tableId", JSON.stringify(tableId));
            }
    };
    if(DataAction.Types.LOAD_DATA_FIREBASE_FOR_SELECT === action.type) {
        dbService
            .collection('stores')
            .doc(`${action.payload.storeId}`) 
            .collection('orders')
            .doc(`${action.payload.tableId}`)
            .onSnapshot((doc:any) => {
                const data = doc.data();
                let price = 0;
                data.receipt.forEach((receipts:any) => {
                    receipts.receipts.forEach((item:any) => {
                        if(item.state === "주문 완료" || item.state === "접수 완료") price += item.item_total_price;
                    })
                })
                const newData = {
                    ...data,
                    receipt_total_price: price
                }
                console.log(newData)
                dispatch(setData(newData, newData.table_number));
            });
            if(storeId !== null) {
                window.localStorage.setItem("storeId", JSON.stringify(storeId));
                window.localStorage.setItem("tableId", JSON.stringify(tableId));
            }
            dispatch(SelectAction.setMenu(action.payload.name));
    };
    if(DataAction.Types.ADD_BUCKET_MENU === action.type) {
        
        const select = action.payload.select;
        let morePrice = select.price;
        const options = getState().Option.option;
        options.forEach((doc:any) => doc.options.forEach((O:any) => {if(O.state) morePrice += O.price}));
        const count = getState().Counter.count;
        const Obj = {
            name: select.name,
            price: select.price,
            options: options,
            count: count,
            id:`${select.name}/${makeId(options)}`,
            item_total_price: (morePrice) * count,
            state:'주문 완료'
        };
        const newBucket = addOrdersFunc(bucket, Obj);
        const totalPrice = getState().Data.data.total_price + Obj.item_total_price;
        dbService
            .collection('stores')
            .doc(`${storeId}`) 
            .collection('orders')
            .doc(`${tableId}`)
            .update({
                'bucket':[
                    ...newBucket
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    };
    if(DataAction.Types.MODIF_BUCKET_MENU_DECREASE === action.type) {
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
            id:`${select.name}/${makeId(select.options)}`,
            item_total_price: itemTotalPrice,
            state:'주문 완료'
        };
        const modifBuc = bucket.map((item:Bucket) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.total_price - morePrice;
        dbService
            .collection('stores')
            .doc(`${storeId}`) 
            .collection('orders')
            .doc(`${tableId}`)
            .update({
                'bucket':[
                    ...modifBuc
                ],
                'total_price': totalPrice
            }).then(() => {
            }).catch((e) => console.log(e));
    }
    if(DataAction.Types.MODIF_BUCKET_MENU_INCREASE === action.type) {

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
            id:`${select.name}/${makeId(select.options)}`,
            item_total_price: itemTotalPrice,
            state:'주문 완료'
        };
        const modifBuc = bucket.map((item:any) => item.id === prevId ? Obj : item);
        const totalPrice = getState().Data.data.total_price + morePrice;
        dbService
            .collection('stores')
            .doc(`${storeId}`) 
            .collection('orders')
            .doc(`${tableId}`)
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
            .doc(`${storeId}`) 
            .collection('orders')
            .doc(`${tableId}`)
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
            .doc(`${storeId}`) 
            .collection('orders')
            .doc(`${tableId}`)
            .update({
                'bucket':[],
                'total_price': 0
            }).then(() => {
            }).catch((e) => console.log(e));
    }
};