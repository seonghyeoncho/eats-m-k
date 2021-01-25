import React from 'react';
import { useSelector } from 'react-redux';
import StoreAndTableBox from './StoreAndTableBox';
import { RootState } from '../../../modules';
interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
}

const StoreAndTableBoxContainer = ({store, table}:Props) => {

    return <StoreAndTableBox store={store} table={table}/>
}
export default StoreAndTableBoxContainer;