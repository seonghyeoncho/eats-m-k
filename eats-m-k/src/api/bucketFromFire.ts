import {dbService} from '../firebase';
export const getBucket =  async (store:string | string[] | null, table: string | string[] | null) : Promise<any> => {
    return (await dbService.collection(`${store}`).doc(`${table}`).get()).data();
     
}
export interface  Buckets {
    bucket : [] | any,
    state:boolean,
    orderStatus:boolean,
    clientId:string,
    totalPrice:number,
    orderAt: number
    orderAt_R: number
}