import React, { useEffect, useState } from 'react';
import BucketView from './BucketView';
import queryString from 'query-string';
import { dbService } from '../../firebase/firebase';
import ResetBucketPopup from '../../component/Bucket/ResetBucketPopup';
import BucketNav from '../../component/Bucket/BucektNav';
import BucketOrderOrBackButton from '../../component/Bucket/BucketOrderOrBackButton';
import BucketViewInfo from '../../component/Bucket/BucketViewInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const BucketViewContainer = (props:any) => {

    
    const { store, table, orderStatus, bucket, totalPrice } = useSelector((state:RootState)=>({
        store:state.Store.information.name,
        table:state.Location.table,
        orderStatus:state.Data.data.orderStatus,
        bucket:state.Data.data.bucket,
        totalPrice:state.Data.data.totalPrice
    }));
    const [ popUpState, setPopUpState ] = useState<boolean>(false);

    const goBack = () => props.history.goBack();
    const popUpTrigger = () => setPopUpState(!popUpState);
    return (
        <>
            <ResetBucketPopup popUpState={popUpState} popUpTrigger={popUpTrigger}/>
            <div className="bucket">
                <BucketNav goBack={goBack} popUpTrigger={popUpTrigger}/>
                <div className="bucket-con">
                    <BucketViewInfo store={store} table={table} bucket={bucket} totalPrice={totalPrice}/>
                </div>
                <BucketView bucket={bucket} totalPrice = {totalPrice} store={store} table={table}/>
                <BucketOrderOrBackButton length={bucket.length} orderStatus={orderStatus}/>
            </div>
        </>
    );
}

export default BucketViewContainer;