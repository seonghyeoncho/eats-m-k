/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { DataAction, StoreAction } from '../../redux/actions';
import ComfirmPage from './ComfirmPage';
import './ComfirmPage.scss';

const ComfirmContainer = (props:any) => {

    const { bucket } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
    }));
    const dispatch = useDispatch();
    useEffect(()=>{
       if(bucket.length === 0) {
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
        }
    },[bucket]);
    return (
        <ComfirmPage bucket={bucket}/>
    );
};

export default ComfirmContainer;