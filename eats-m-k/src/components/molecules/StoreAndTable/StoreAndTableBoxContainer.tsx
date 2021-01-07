import React from 'react';
import { useSelector } from 'react-redux';
import StoreAndTableBox from './StoreAndTableBox';
import { RootState } from '../../../modules';


const StoreAndTableBoxContainer = () => {

    const {store, table, status} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table,
        status:state.stateSet.orderStatus
    }))

    return <StoreAndTableBox store={store} table={table} status={status}/>
}
export default StoreAndTableBoxContainer;