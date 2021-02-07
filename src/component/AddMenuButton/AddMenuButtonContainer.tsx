import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { addBucketMenu } from '../../redux/actions/DataAction';
import './AddMenuButton.scss';
import { RootState } from '../../redux';

const AddMenuButtonContainer = () => {
    const { select, count, options } = useSelector((state:RootState) => ({
        select:state.Select.select,
        count:state.Counter.count,
        options:state.Select.options
    }));
    const dispatch = useDispatch();
    const addOrders = () => {
        console.log('dispatch');
        const Obj = {
            name: select.name,
            price: select.price,
            itemTotalPrice: select.itemTotalPrice,
            count: count,
            options:options
        };
        dispatch(addBucketMenu(Obj));
    };
    return <AddMenuButton  addOrders={addOrders}/>
}

export default AddMenuButtonContainer;