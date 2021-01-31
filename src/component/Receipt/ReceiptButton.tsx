import React from 'react';
import { Link } from 'react-router-dom';
import Complete from '../../image/icons/icon_OrderCompleted_x3.png';
import Reception from '../../image/icons/icon_ReceptionCompleted_x3.png';

interface Props {
    orderStatus:boolean | undefined
    state:boolean | undefined;
    store: string | string[] | null,
    table: string | string[] | null

}
const ReceiptButton = ({orderStatus,state, store, table}:Props) => {

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';
    } else if(!state && orderStatus){
        text = '주문완료';
    } else {

    }
    
    return (
        <Link to={`/orderstatus/?store=${store}&table=${table}`}>
           
            {   
                state ? 
                    <img src={Reception}/>
                :
                    <img src={Complete}/>
            }
            <div className="order-status-text">{text}</div>
           
        </Link>
    );
};
export default ReceiptButton;