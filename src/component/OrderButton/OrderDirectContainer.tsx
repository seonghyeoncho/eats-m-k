import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { DataAction } from '../../redux/actions';
import OrderButton from './OrderButton';

const OrderButtonDirectContainer = () => {

    const dispatch = useDispatch();
    const { select } = useSelector((state:RootState) => ({
        select:state.Select.select,
    }));

    const addOrders = () => {
        console.log('dispatch');
        const Obj = {
            name: select.name,
            price: select.price,
            itemTotalPrice: select.itemTotalPrice,
            count: select.count,
            options:select.options,
        };
        dispatch(DataAction.addBucketMenu(Obj));
    };
    
    return(
        <div onClick={addOrders}><OrderButton text={'주문하기'}/></div>
    );
}

export default OrderButtonDirectContainer;