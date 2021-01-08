import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../../functions/addCommaFunc';


type Props = {
    
    totalPrice: number
    
}

const OrderButton = ({totalPrice}:Props) => {

    const price = numberWithCommas(totalPrice);

    return(
        <>
           
            <Link to="/orderlist">
                <button>주문하기</button>
            </Link>
            
        </>
    );
}

export default OrderButton; 