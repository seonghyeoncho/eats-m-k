import React from 'react';

interface Props {
    item:any
}
const OrderItem = ({item}:Props) => {

    return(

        <div>
            
            <div>{item.menu}</div>

        </div>

    );

}

export default OrderItem;