import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButton from './BucketButton';



const BucketButtonContainer = () => {

    const {orderState, store, table} = useSelector((state:RootState)=>({

        orderState:state.stateSet.orderState,
        store:state.storeSet.store,
        table:state.tableSet.table,
        
    }));

    console.log(orderState);

    return(

       <BucketButton store={store} table={table} />
        
    );

}

export default BucketButtonContainer;