import React from 'react';
import { useSelector } from 'react-redux';
import OrderStatusButton from './OrderStatusButton';
import { RootState } from '../../../modules';


const OrderStatusButtonContainer = () => {

    const {orderStatus,state,store,table} = useSelector((state:RootState)=>({
        orderStatus:state.myBucket.bucket.data?.orderStatus,
        state:state.myBucket.bucket.data?.state,
        store:state.storeSet.store,
        table:state.tableSet.table
    }))


    return (
        <div>
            { 
                !orderStatus ? 

                    <></> 
                : 
                    <OrderStatusButton orderStatus={orderStatus} state={state} store={store} table={table}/>
            }
        </div>
    );
}

export default OrderStatusButtonContainer;