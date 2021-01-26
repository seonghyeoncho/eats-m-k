import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


const OrderButton = () => {
    const query = queryString.parse(window.location.search);
    const store = query.store;
    const table = query.table

    return(
        <>
            <Link to={`/orderlist/?store=${store}&table=${table}`}>
                 <div className="main-order-bt">
                     <div className="main-order-bt-text">주문하기</div>
                 </div>
            </Link>
        </>
    );
}

export default OrderButton; 