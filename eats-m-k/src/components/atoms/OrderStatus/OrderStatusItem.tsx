import React from 'react';

interface Props {
    item:any
}
const OrderStatusItem = ({item}:Props) => {


    return (
        <div>
            {item.menu}{item.price}{item.count}

        </div>
    );
}


export default OrderStatusItem;