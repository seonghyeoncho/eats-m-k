import React from 'react';

type Props = {
    cancleOrders:()=>void
}

const CancleOrderButton = ({cancleOrders}:Props) => {



    return (
        <button onClick={cancleOrders}>X</button>
    );
}

export default CancleOrderButton;