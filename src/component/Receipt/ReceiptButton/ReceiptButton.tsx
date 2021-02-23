import React from 'react';
import { Link } from 'react-router-dom';
import Complete from '../../../image/icons/icon_main_OC_x3.png'
import Reception from '../../../image/icons/icon_main_RC_x3.png';
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