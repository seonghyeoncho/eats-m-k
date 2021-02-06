import React from 'react';
import { Link } from 'react-router-dom';
import './OrderButton.scss';

interface Props {
    text:string;
    func: () => void;
};

const OrderButton = ({text, func}:Props) => {
    return(
        <Link to={`/comfirm`} onClick={func}>
            <div className="order">
                    <div className="text">{text}</div>
            </div>
        </Link>
    );
}

export default OrderButton; 