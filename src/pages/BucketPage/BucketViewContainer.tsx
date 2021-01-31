import React, { useEffect, useState } from 'react';
import BucketView from './BucketView';
import queryString from 'query-string';
import { dbService } from '../../firebase/firebase';
import ResetBucketPopup from '../../component/Bucket/ResetBucketPopup';
import BucketNav from '../../component/Bucket/BucektNav';
import BucketOrderOrBackButton from '../../component/Bucket/BucketOrderOrBackButton';
import BucketViewInfo from '../../component/Bucket/BucketViewInfo';

const BucketViewContainer = (props:any) => {

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ orderStatus, setOrderStatus ] = useState<boolean>();
    const [ bucket, setBucket ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    const [ popUpState, setPopUpState ] = useState<boolean>(false);
    const goBack = () => props.history.goBack();
    const popUpTrigger = () => setPopUpState(!popUpState);

    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setBucket(data.bucket);
            setTotalPrice(data.totalPrice);
        });
        setOrderStatus(JSON.parse(window.localStorage.getItem('orderStatus')!));
    },[orderStatus]);

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