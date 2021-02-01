import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

interface Props {
    text:string
};

const OrderButton = ({text}:Props) => {
    return(
        <>
            <Link to={`/orderlist`}>
                 <div className="main-order-bt">
                     <div className="main-order-bt-text">{text}</div>
                 </div>
            </Link>
        </>
    );
}

export default OrderButton; 