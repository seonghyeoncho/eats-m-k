import React, { useState } from 'react';
import ResetBucketPopup from '../../component/Bucket/ResetBucketPopup/ResetBucketPopup';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import BucketContent from '../../component/Bucket/BucketContent/BucketContent';
import BucketNav from '../../component/Bucket/BucketNav/BucektNav';

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
    const goBack = () => {
        history.goBack();
    }
    const popUpTrigger = () => {
        setPopUpState(!popUpState);
    }
    
    return (
        <div className="bucket">
            <ResetBucketPopup popUpState={popUpState} popUpTrigger={popUpTrigger}/>
            <BucketNav goBack={goBack} popUpTrigger={popUpTrigger}/>
            <BucketContent bucket={bucket}/>
        </div>
    );
}

export default BucketPage;