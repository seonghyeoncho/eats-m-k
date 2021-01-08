import React from 'react';
import { useSelector } from 'react-redux';
import StoreAndTableBox from './StoreAndTableBox';
import { RootState } from '../../../modules';


const StoreAndTableBoxContainer = () => {


    const {store, table, status, orderList} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table,
        status:state.stateSet.orderStatus,
        orderList:state.orderMenus

    }))

    return <StoreAndTableBox store={store} table={table} status={status} orderList={orderList}/>
}
export default StoreAndTableBoxContainer;