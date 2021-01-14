import React from 'react';
import { useSelector } from 'react-redux';
import OrderStatusButton from './OrderStatusButton';
import { RootState } from '../../../modules';


const OrderStatusButtonContainer = () => {

    const {orderStatus,state} = useSelector((state:RootState)=>({
        orderStatus:state.stateSet.orderStatus,
        state:state.stateSet.state
    }))


    return <OrderStatusButton orderStatus={orderStatus} state={state}/>
}

export default OrderStatusButtonContainer;