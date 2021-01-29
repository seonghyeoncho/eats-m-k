import { dbService } from "../firebase/firebase"

export const updateBucket = (store:string | string[] | null, table:string | string[] | null, Obj:any, totalPrice:number) => {
    dbService.collection(`${store}`).doc(`${table}`).update({
        bucket:[
            ...Obj
        ],
        totalPrice: totalPrice
    });
};

export const removeBucketItem = (id:string, store:string | string[] | null, table:string | string[] | null, bucket:any, totalPrice:number) => {
    const buckett = bucket?.filter((doc:any)=> doc.id !== id );
    updateBucket(store,table,buckett,(totalPrice));
};

export const resetBucket = (store:string | string[] | null, table:string | string[] | null) => {
    dbService.collection(`${store}`).doc(`${table}`).update({
        bucket:[],
        totalPrice: 0
    });
};