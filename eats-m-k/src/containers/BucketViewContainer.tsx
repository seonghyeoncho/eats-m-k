import React from 'react';
import { useSelector } from 'react-redux';
import BucketView from '../components/BucketView';
import { RootState } from '../modules';

const BucketViewContainer = () => {

    const {orderList} = useSelector((state:RootState)=>({
        orderList:state.orderMenus
    }))

    return <BucketView orderList={orderList}/>
}

export default BucketViewContainer;