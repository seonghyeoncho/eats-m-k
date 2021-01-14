import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BucketView from './BucketView';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';

const BucketViewContainer = () => {
    const [set,forceUpdate] = useState(1);

    const { store, table, bucket,totalPrice } = useSelector((state:RootState)=>({

        store:state.storeSet.store,
        table:state.tableSet.table,
        bucket:state.myBucket.bucket.data?.bucket,
        totalPrice:state.totalPrice.price
        
    }))

    

    function handleClick() {
      forceUpdate(0);
      console.log('111')
    }

    const dispatch = useDispatch();

    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot(snapShot=>{
            console.log(snapShot.data())
        })
        
    },[]);

    console.log(bucket)

    return (
        <div>
            <div>{store}</div>
            <div>테이블 {table}</div>
            <div>{numberWithCommas(totalPrice)}</div>
            <BucketView bucket={bucket} handleClick={handleClick}/>
        </div>
    );

}

export default BucketViewContainer;