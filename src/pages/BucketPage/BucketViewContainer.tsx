import React, { useEffect, useState } from 'react';
import BucketView from './BucketView';
import queryString from 'query-string';
import { dbService } from '../../firebase/firebase';
import { resetBucket } from '../../functions/updateBucket';
import PopUp from '../../components/organisms/PopUp';
import ResetBucketPopup from '../ResetBucketPopup';
import BucketNav from './BucektNav';
import BucketOrderOrBackButton from './BucketOrderOrBackButton';


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
    },[]);

    return (
        <>
            <ResetBucketPopup popUpState={popUpState} popUpTrigger={popUpTrigger}/>
            <div className="bucket">
                <BucketNav goBack={goBack} popUpTrigger={popUpTrigger}/>
                <div className="bucket-con">
                    { 
                        bucket.length !== 0 ? 
                            <div className="bucket-info-con">
                                <div className="bucket-info">
                                    <div className="bucket-info-store">{store}</div>
                                    <div className="bucket-info-table">테이블 {table}</div>
                                    <div className="bucket-info-price">{numberWithCommas(totalPrice)}원</div>
                                </div>
                            </div>
                        :
                            <></>
                    }
                </div>
                <BucketView bucket={bucket} totalPrice = {totalPrice} store={store} table={table}/>
                <BucketOrderOrBackButton length={bucket.length} orderStatus={orderStatus}/>
            </div>
        </>
    );
}

export default BucketViewContainer;