import React from 'react';
import { Link, Redirect } from 'react-router-dom';


interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
    text: string;
    onSubmit: ()=> void
    cancle:()=>void
    
}

const OrderDirect = ({store, table,onSubmit,text,cancle}:Props) => {


    //if(n === 0)  return <Redirect to={`/menu/?store=${store}&table=${table}`}/>
    console.log('sdfsdf',store,table);

    return ( 
        <div>
            <Link to="/complete"><button onClick={onSubmit}>주문하기</button></Link>
            <Link to={`/menu/?store=${store}&table=${table}`}><button onClick={cancle}>{text}</button></Link>

        </div>
    );
}

export default OrderDirect;