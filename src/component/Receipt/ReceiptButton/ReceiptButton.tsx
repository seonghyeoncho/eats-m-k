import React from 'react';
import { Link } from 'react-router-dom';
import Complete from '../../../image/icons/icon_OrderCompleted_x3.png';
import Reception from '../../../image/icons/icon_ReceptionCompleted_x3.png';

interface Props {
    orderStatus:boolean | undefined;
    state:boolean | undefined;
};

const ReceiptButton = ({ orderStatus,state }:Props) => {

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';
    } else if(!state && orderStatus){
        text = '주문완료';
    };
    
    return (
        <Link to='/receipt'>
            <div className="receipt-bt">
                {   
                    state ? <img src={Reception} alt="Re"/>
                    : <img src={Complete} alt="Co"/>
                }
                <div className="text">{text}</div>
            </div>
        </Link>
    );
};
export default ReceiptButton;