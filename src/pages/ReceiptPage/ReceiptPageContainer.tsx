import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux';
import ReceiptPage from './ReceiptPage';

const ReceiptPageContainer = (props:any) => {

    const { receipts } =  useSelector((state:RootState) => ({
        receipts:state.Data.data.receipt,
    }));
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');

    return (
        <>
            {
                receipts.length === 0 ? <Redirect to={`/?store=${store}&table=${table}`}/>
                : <ReceiptPage history={props.history}/>
            }
        </>
    );
};

export default ReceiptPageContainer;