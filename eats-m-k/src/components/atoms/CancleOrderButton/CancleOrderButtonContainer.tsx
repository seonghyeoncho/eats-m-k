import React from 'react';
import { useDispatch } from 'react-redux';
import CancleOrderButton from './CancleOrderButton';
import { cancleOrder } from '../../../modules/orderMenus';
import { decrease } from '../../../modules/totalPrice';


type Props = {
    item:any
}
const CancleOrderButtonContainer = ({item}:Props) => {
    const dispatch = useDispatch();

    const cancleOrders = () => {

        dispatch(cancleOrder(item.menu, item.id));
        dispatch(decrease(item.count * item.price));

    }

    return (
        <CancleOrderButton cancleOrders={cancleOrders}/>
    );
}

export default CancleOrderButtonContainer;