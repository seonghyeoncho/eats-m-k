import React from 'react';

interface Props {
    item:any
}
const OrderList = ({item}:Props) => {



    return(
        <div>
            <div>{item.menu}</div>

        </div>
    );
}

export default OrderList;