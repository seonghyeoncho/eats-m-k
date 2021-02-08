import React from 'react';
import StoreAndTableBox from './StoreAndTableBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import './StoreAndTable.scss';

const StoreAndTableBoxContainer = () => {
    const { orderStatus, state } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        store:state.Store.information.name,
        table:state.Location.table,
        state:state.Data.data.state
    }));

    const store = window.localStorage.getItem('storeName');
    const table = window.localStorage.getItem('table');

    return <StoreAndTableBox store={store} table={table} state={state} orderStatus={orderStatus}/>
}
export default StoreAndTableBoxContainer;