import {dbService} from '../firebase';
export const getBucket =  async (store:string | string[] | null, table: string | string[] | null) : Promise<any> => {
    return (await dbService.collection(`${store}`).doc(`${table}`).get()).data();
     
}
export interface  Buckets {
    bucket : [] | any,
    check:boolean,
    orderState:boolean;
}