import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    store: string | string[] | null;
    table: string | string[] | null;
    onSubmit: ()=> void
}

const Order = ({store, table,onSubmit}:Props) => {

    console.log('sdfsdf',store,table);

    return ( 
        <div>
            <Link to="/complete"><button onClick={onSubmit}>주문하기</button></Link>
            <Link to={`/menu/?store=${store}&table=${table}`}><button>취소하기</button></Link>

        </div>
    );
}

export default Order;