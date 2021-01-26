import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancleOrderButton from './CancleOrderButton';
import { decrease } from '../../../modules/totalPrice';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';



interface Props {
    id:string
    price:number
    bucket: any
}
const CancleOrderButtonContainer = ({id,price,bucket}:Props) => {
    console.log(price);
   

    const {buckets,store, table,totalPrice} = useSelector((state:RootState)=>({
        buckets:state.myBucket.bucket.data?.bucket,
        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price

    }))
    
    const dispatch = useDispatch();

    const cancleOrders = () => {
        const buckett = bucket?.filter((doc:any)=> doc.id !== id )
        
        dispatch(decrease(price));

        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...buckett
                
            ],
            totalPrice: totalPrice - price

        
        })
        
    }

    return (
        <CancleOrderButton cancleOrders={cancleOrders}/>
    );
}

export default CancleOrderButtonContainer;