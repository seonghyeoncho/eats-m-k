import React, { useState } from 'react';
import ResetBucketPopup from '../../component/Bucket/ResetBucketPopup';
import BucketOrderOrBackButton from '../../component/Bucket/BucketOrderOrBackButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import BucketContent from '../../component/Bucket/BucketContent';

interface Props {
    history: any
    bucket: any
};

const BucketPage = ({history, bucket}:Props) => {
    
    const { orderStatus, totalPrice } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.orderStatus,
        bucket:state.Data.data.bucket,
        totalPrice:state.Data.data.totalPrice
    }));
    const [ popUpState, setPopUpState ] = useState<boolean>(false);
    const goBack = () => history.goBack();
    const popUpTrigger = () => setPopUpState(!popUpState);
    
    return (
        <>
            <ResetBucketPopup popUpState={popUpState} popUpTrigger={popUpTrigger}/>
            <BucketContent bucket={bucket}/>
            <BucketOrderOrBackButton length={bucket.length} orderStatus={orderStatus}/>
        </>
    );
}

export default BucketPage;