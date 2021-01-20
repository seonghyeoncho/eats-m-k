import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


const OrderButton = () => {

    return(
        <>
            <Link to='/orderlist'>
                 <div className="main-order-bt">주문하기</div>
            </Link>
        </>
    );
}

export default OrderButton; 