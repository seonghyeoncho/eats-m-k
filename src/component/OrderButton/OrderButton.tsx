import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import './OrderButton.scss';

interface Props {
    text:string;
    func: () => void;
};

const OrderButton = ({text, func}:Props) => {
    return(
        <div className="order">
            <Link to={`/comfirm`} onClick={func}>
                     <div className="text">{text}</div>
            </Link>
        </div>
    );
}

export default OrderButton; 