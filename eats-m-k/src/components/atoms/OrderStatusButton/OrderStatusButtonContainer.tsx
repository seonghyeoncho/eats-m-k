import React from 'react';
import { useSelector } from 'react-redux';
import OrderStatusButton from './OrderStatusButton';
import { RootState } from '../../../modules';

interface Props {

    status:boolean

}
const OrderStatusButtonContainer = ({status}:Props) => {

    const orderState = useSelector((state:RootState)=>state.stateSet.orderState);


    return <OrderStatusButton orderState={orderState} status={status}/>
}

export default OrderStatusButtonContainer;