import React from 'react';
import StoreAndTableBox from './StoreAndTableBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import './StoreAndTable.scss';

const StoreAndTableBoxContainer = () => {
    const { orderStatus, state, store, table } = useSelector((state:RootState)=>({
        orderStatus:state.Data.data.order_state,
        store:state.Store.information.name,
        table:state.Data.tableNumber,
        state:state.Data.data.state
    }));


    return <StoreAndTableBox store={store} table={table} state={state} orderStatus={orderStatus}/>
}
export default StoreAndTableBoxContainer;