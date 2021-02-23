import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { StoreAction } from '../../redux/actions';
import BucketPage from './BucketPage';
import './BucketPage.scss';

const BucketPageContainer = (props:any) => {
    const { bucket, storeId } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
        storeId:state.Location.storeId
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        if(storeId === null){
            const storeId = JSON.parse(window.localStorage.getItem("storeId")!);
            const tableId = JSON.parse(window.localStorage.getItem("tableId")!);
            dispatch(StoreAction.loadStoreFirebase(storeId, tableId))
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[storeId]);
    return (
        <BucketPage history={props.history} bucket={bucket}/>
    );
};

export default BucketPageContainer;