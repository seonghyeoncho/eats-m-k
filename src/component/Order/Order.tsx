import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    text: string;
    onSubmit: ()=> void
}

const Order = ({ onSubmit, text }:Props) => {

    const store:string = JSON.parse(window.localStorage.getItem('storeId')!);
    const table:string = JSON.parse(window.localStorage.getItem('tableId')!);

    return ( 
        <div className="order">
            
            <div className="cancle-order">
                <Link to={`/?store=${store}&table=${table}`} className="atohome">
                    <div className="text">
                        {text}
                    </div>
                </Link>
            </div>
            <div onClick={onSubmit} className="order">
                <Link to="/complete" className="atocom">
                    
                    <div className="order-text">주문하기</div>
                    
                </Link>
            </div>
        </div>
    );
}

export default Order;