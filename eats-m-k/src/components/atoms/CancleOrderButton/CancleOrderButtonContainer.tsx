import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancleOrderButton from './CancleOrderButton';
import { decrease } from '../../../modules/totalPrice';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import { useCookies } from 'react-cookie';



interface Props {
    id:string
    price:number
    bucket: any
}
const CancleOrderButtonContainer = ({id,price,bucket}:Props) => {

    const [ cookies, setCookie, removeCookie ] = useCookies(['clientId', 'bucket', 'store', 'table']);
   

    const {buckets,store, table,totalPrice} = useSelector((state:RootState)=>({
        buckets:state.myBucket.bucket.data?.bucket,
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price

    }))
    
    const dispatch = useDispatch();

    const cancleOrders = () => {
        const buckett = bucket?.filter((doc:any)=> doc.id !== id )
        console.log(bucket);
        
        dispatch(decrease(price));

        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...buckett
                
            ],
            totalPrice: totalPrice - price

        
        })
        const test = cookies.bucket.filter((doc:any) => doc.id!== id);
        setCookie('bucket', test);
        console.log('cookie bucket test', cookies.bucket)
    }

    return (
        <CancleOrderButton cancleOrders={cancleOrders}/>
    );
}

export default CancleOrderButtonContainer;