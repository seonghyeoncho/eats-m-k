import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


const OrderButton = () => {

    return(
        <>
           
            <Link to='/orderlist'>
                    <button>주문하기</button>
            </Link>
            
        </>
    );
}

export default OrderButton; 