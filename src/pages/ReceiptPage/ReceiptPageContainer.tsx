import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { DataAction, StoreAction } from '../../redux/actions';
import ReceiptPage from './ReceiptPage';
import './ReceiptPage.scss';

const ReceiptPageContainer = (props:any) => {

    const { receipts, storeData} =  useSelector((state:RootState) => ({
        receipts:state.Data.data.receipt,
        storeData:state.Store
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        if(receipts.length === 0){
            dispatch(StoreAction.loadStoreFirebase());
            dispatch(DataAction.loadDataFirebase());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[storeData]);
    return (
        <ReceiptPage history={props.history}/>
    );
};

export default ReceiptPageContainer;