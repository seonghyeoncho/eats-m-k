/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { loadStoreFirebase } from '../../redux/actions/StoreAction';
import ComfirmPage from './ComfirmPage';
import './ComfirmPage.scss';

const ComfirmContainer = (props:any) => {

    const { bucket, storeId } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
        storeId:state.Location.storeId
    }));
    const dispatch = useDispatch();
    useEffect(()=>{
       if(storeId === null) {
           console.log('dfdf')
            const storeId = JSON.parse(window.localStorage.getItem("storeId")!);
            const tableId = JSON.parse(window.localStorage.getItem("tableId")!);
            dispatch(loadStoreFirebase(storeId, tableId));
        }
    },[storeId]);
    return (
        <ComfirmPage bucket={bucket}/>
    );
};

export default ComfirmContainer;