import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import OrderStatusView from './OrderStatusView';


const OrderStatusViewContainer = () => {

    const {orderList} = useSelector((state:RootState)=>({
        orderList:state.orderMenus
    }));



    return <OrderStatusView orderList={orderList} />
}

export default OrderStatusViewContainer;