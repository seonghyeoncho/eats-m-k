import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { addBucketMenu } from '../../redux/actions/DataAction';
import './AddMenuButton.scss';
import { RootState } from '../../redux';

const AddMenuButtonContainer = () => {

    const { select, count } = useSelector((state:RootState) => ({
        select:state.Select.select,
        count:state.Counter.count,
    }));

    const dispatch = useDispatch();
    const addOrders = () => {
        console.log('dispatch');
        const Obj = {
            name: select.name,
            price: select.price,
            itemTotalPrice: select.itemTotalPrice,
            count: count,
            options:select.options,
        };
        console.log(Obj)
        dispatch(addBucketMenu(Obj));
    };
    return <AddMenuButton  addOrders={addOrders}/>
}

export default AddMenuButtonContainer;