import React from 'react';

type Props = {
    cancleOrders:()=>void
}

const CancleOrderButton = ({cancleOrders}:Props) => {



    return (
        <button onClick={cancleOrders}>주문취소</button>
    );
}

export default CancleOrderButton;