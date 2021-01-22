import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


const OrderButton = () => {

    return(
        <>
            <Link to='/orderlist'>
                 <div className="main-order-bt">
                     <div className="main-order-bt-text">주문하기</div>
                 </div>
            </Link>
        </>
    );
}

export default OrderButton; 