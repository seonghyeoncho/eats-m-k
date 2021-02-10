import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { DataAction, StoreAction } from '../../redux/actions';
import BucketPage from './BucketPage';
import './BucketPage.scss';

const BucketPageContainer = (props:any) => {
    const { bucket, storeData } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
        storeData:state.Store
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        if(bucket.length === 0){
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[storeData]);
    return (
        <BucketPage history={props.history} bucket={bucket}/>
    );
};

export default BucketPageContainer;