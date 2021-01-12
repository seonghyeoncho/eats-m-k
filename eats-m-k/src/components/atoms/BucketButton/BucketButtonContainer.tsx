import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButton from './BucketButton';



const BucketButtonContainer = () => {
    const {orderState, store, table, orderMenus} = useSelector((state:RootState)=>({
        orderState:state.stateSet.orderState,
        store:state.storeSet.store,
        table:state.tableSet.table,
        orderMenus:state.orderMenus
    }));

    console.log(orderState);


    return(
        <BucketButton store={store} table={table} n={orderMenus.length}/>
    );
}

export default BucketButtonContainer;