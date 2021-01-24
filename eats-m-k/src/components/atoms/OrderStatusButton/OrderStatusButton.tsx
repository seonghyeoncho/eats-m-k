import React from 'react';
import { Link } from 'react-router-dom';
import Complete from '../../../icons/icon_OrderCompleted_x3.png';
import Reception from '../../../icons/icon_ReceptionCompleted_x3.png';

interface Props {
    orderStatus:boolean
    state:boolean
}
const OrderStatusButton = ({orderStatus,state}:Props) => {

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';


    } else if(!state && orderStatus){

        text = '주문완료';


    } else {

    }
    

    return (
        <Link to="/orderstatus">
            {   
                state ? 
                    <img src={Complete}/>
                :
                    <img src={Reception}/>
            }
           
            <div>{text}</div>
        </Link>
    );
}
export default OrderStatusButton;