import React from 'react';
import { useSelector } from 'react-redux';
import StoreAndTableBox from './StoreAndTableBox';
import { RootState } from '../../../modules';
interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
    state: boolean | undefined
    orderStatus: boolean | undefined
}

const StoreAndTableBoxContainer = ({store, table, state, orderStatus}:Props) => {

    return <StoreAndTableBox store={store} table={table} state={state} orderStatus={orderStatus}/>
}
export default StoreAndTableBoxContainer;