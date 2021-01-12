import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BucketView from './BucketView';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';

const BucketViewContainer = () => {

    const [ bucketList, setBucketList ] = useState<any>([]);

    const { orderList, store, table } = useSelector((state:RootState)=>({
        orderList:state.orderMenus,
        store:state.storeSet.store,
        table:state.tableSet.table
        
    }))

    const getBucket = () => {

        dbService.collection(`${store}`).doc(`${table}`)
        .onSnapshot((doc:any)=>{
            console.log('bucket',doc.data().bucket);

        })
    
    }
    useEffect(()=>{
        getBucket();

    },[]);    

    return <BucketView orderList={orderList}/>
}

export default BucketViewContainer;