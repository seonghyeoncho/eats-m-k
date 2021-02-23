import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { StoreAction } from '../../redux/actions';
import ReceiptPage from './ReceiptPage';
import './ReceiptPage.scss';

const ReceiptPageContainer = (props:any) => {

    const { receipts, storeId} =  useSelector((state:RootState) => ({
        receipts:state.Data.data.receipt,
        storeId:state.Location.storeId,
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        if(receipts.length === 0){
            const storeId = JSON.parse(window.localStorage.getItem("storeId")!);
            const tableId = JSON.parse(window.localStorage.getItem("tableId")!);
            dispatch(StoreAction.loadStoreFirebase(storeId, tableId))
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[storeId]);
    return (
        <ReceiptPage history={props.history}/>
    );
};

export default ReceiptPageContainer;