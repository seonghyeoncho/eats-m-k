import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    text: string;
    onSubmit: ()=> void
}

const Order = ({ onSubmit, text }:Props) => {

    const store = window.localStorage.getItem('store');
    const table= window.localStorage.getItem('table');

    return ( 
        <div className="order">
            <Link to={`/?store=${store}&table=${table}`}>
                <div className="text">{text}</div>
            </Link>
            <Link to="/complete">
                <div onClick={onSubmit} className="order">주문하기</div>
            </Link>
        </div>
    );
}

export default Order;