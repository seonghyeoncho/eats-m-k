import React from 'react';
import CancleOrderButtonContainer from '../containers/CancleOrderButtonContainer';
import CancleOrderButton from './CancleOrderButton';;
type Props = {
    item: any
}
const OrderStatusItem = ({item}:Props) => {
    return(

        <div>
            <div>{item.menu}{item.count}{item.price}</div>
            <CancleOrderButtonContainer item={item}/>
        </div>
        
    );
}
export default OrderStatusItem;