import React from 'react';
import { Link, Redirect } from 'react-router-dom';


interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
    text: string;
    onSubmit: ()=> void
    
}

const Order = ({store, table,onSubmit,text}:Props) => {


    //if(n === 0)  return <Redirect to={`/menu/?store=${store}&table=${table}`}/>
    console.log('sdfsdf',store,table);

    return ( 
        <div className="order-bt-con">
            

            <Link to={`/menu/?store=${store}&table=${table}`} >
                <div className="order-bt-cancle">{text}</div>
            </Link>

            <Link to="/complete">
                <div onClick={onSubmit} className="order-bt">주문하기</div>
            </Link>
            
        </div>
    );
}

export default Order;