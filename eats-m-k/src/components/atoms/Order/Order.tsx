import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    store: any
    table: any
    text: string;
    onSubmit: ()=> void
    
}

const Order = ({store, table,onSubmit,text}:Props) => {


    return ( 
        <div className="order-bt-con">
            

            <Link to={`/menu/?store=${store}&table=${table}`}>
                <div className="order-bt-cancle">{text}</div>
            </Link>

            <Link to="/complete">
                <div onClick={onSubmit} className="order-bt">주문하기</div>
            </Link>
            
        </div>
    );
}

export default Order;