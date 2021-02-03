import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

interface Props {
    text:string
};

const OrderButton = ({text}:Props) => {
    return(
        <div className="order">
            <Link to={`/comfirm`}>
                 <div className="content">
                     <div className="text">{text}</div>
                 </div>
            </Link>
        </div>
    );
}

export default OrderButton; 