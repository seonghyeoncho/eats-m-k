import React from 'react';
import { Link } from 'react-router-dom';
import Completed from '../../../icons/icon_OrderCompleted_x3.png';
import Reception from '../../../icons/icon_ReceptionCompleted_x3.png';
interface Props {
    orderStatus:boolean
    state:boolean
}
const OrderStatusButton = ({orderStatus,state}:Props) => {
    console.log(orderStatus,state)


    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';

    } else if(!state && orderStatus){

        text = '주문완료';

    }
    

    return<Link to="/orderstatus"><div>{text}</div></Link>
}
export default OrderStatusButton;