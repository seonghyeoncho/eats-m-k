import React from 'react';
import { useSelector } from 'react-redux';
import OrderStatusView from '../components/OrderStatusView';
import { RootState } from '../modules';


const OrderStatusContainer = (props:any) => {

    const orderList = useSelector((state:RootState)=> state.orderMenus);
    const goBack = () => {
        props.history.goBack();

    }


    return <OrderStatusView orderList={orderList} goBack={goBack}/>
}

export default OrderStatusContainer;