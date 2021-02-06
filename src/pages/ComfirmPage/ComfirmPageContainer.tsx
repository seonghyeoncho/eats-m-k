import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux';
import ComfirmPage from './ComfirmPage';
import './ComfirmPage.scss';

const ComfirmContainer = (props:any) => {

    const store = window.localStorage.getItem('store');
    const storeName = window.localStorage.getItem('storeName');
    const table = window.localStorage.getItem('table');
    const { bucket, totalPrice } = useSelector((state:RootState)=>({
        bucket:state.Data.data.bucket,
        totalPrice:state.Data.data.totalPrice,
    }));

    return (
        // bucket.length === 0 ? <Redirect to={`/?store=${store}&table=${table}`}/>
        // :
         <ComfirmPage bucket={bucket}/>
    );
};

export default ComfirmContainer;