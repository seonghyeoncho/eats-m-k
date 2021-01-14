import React from 'react';
import { Link } from 'react-router-dom';
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

    } else {
        text = '주문중';
    }

    return<Link to="/orderstatus"><button>{text}</button></Link>
}
export default OrderStatusButton;