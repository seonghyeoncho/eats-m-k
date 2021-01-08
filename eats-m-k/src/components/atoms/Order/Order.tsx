import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
    text: string;
    onSubmit: ()=> void
}

const Order = ({store, table,onSubmit,text}:Props) => {

    console.log('sdfsdf',store,table);

    return ( 
        <div>
            <Link to="/complete"><button onClick={onSubmit}>주문하기</button></Link>
            <Link to={`/menu/?store=${store}&table=${table}`}><button>{text}</button></Link>

        </div>
    );
}

export default Order;