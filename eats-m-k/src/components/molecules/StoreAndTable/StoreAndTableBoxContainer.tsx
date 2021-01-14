import React from 'react';
import { useSelector } from 'react-redux';
import StoreAndTableBox from './StoreAndTableBox';
import { RootState } from '../../../modules';


const StoreAndTableBoxContainer = () => {


    const {store, table} = useSelector((state:RootState)=>({
        store:state.storeSet.store,
        table:state.tableSet.table,
    }))

    return <StoreAndTableBox store={store} table={table}/>
}
export default StoreAndTableBoxContainer;