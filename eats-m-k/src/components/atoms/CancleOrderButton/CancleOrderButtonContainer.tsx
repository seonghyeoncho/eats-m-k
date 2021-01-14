import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancleOrderButton from './CancleOrderButton';
import { decrease } from '../../../modules/totalPrice';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';


interface Props {
    id:string
    price:number
}
const CancleOrderButtonContainer = ({id,price}:Props) => {

    const {buckets,store, table} = useSelector((state:RootState)=>({
        buckets:state.myBucket.bucket.data?.bucket,
        store:state.storeSet.store,
        table:state.tableSet.table

    }))
    
    const dispatch = useDispatch();

    const cancleOrders = () => {
        const bucket = buckets.filter((doc:any)=> doc.id !== id )
        console.log(bucket);
        
        dispatch(decrease(price));

        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...bucket
                
            ]

        
        })
    }

    return (
        <CancleOrderButton cancleOrders={cancleOrders}/>
    );
}

export default CancleOrderButtonContainer;