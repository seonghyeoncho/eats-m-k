import React from 'react';
import { Link } from 'react-router-dom';
import Complete from '../../../image/icons/orderCompleted_1.gif'
import Reception from '../../../image/icons/receptionCompleted_1.gif';
// import co from '../../../image/icons/receptionCompleted'
interface Props {
    orderStatus:boolean | undefined;
    state:boolean | undefined;
};

const ReceiptButton = ({ orderStatus,state }:Props) => {

    return (
        <Link to='/receipt' onClick={()=>window.scrollTo(0,0)}>
            <div className="receipt-bt">
                {   
                    state ? <img src={Reception} alt="Re"/>
                    : <img src={Complete} alt="Co"/>
                }
            </div>
        </Link>
    );
};
export default ReceiptButton;