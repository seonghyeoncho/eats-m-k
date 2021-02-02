import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { addBucketMenu } from '../../redux/actions/DataAction';
import './AddMenuButton.scss';
import { RootState } from '../../redux';

const AddMenuButtonContainer = () => {

    const { select, } = useSelector((state:RootState) => ({
        select:state.Select.select
    }));
    console.log(select);
    const dispatch = useDispatch();
    const addOrders = () => {
        console.log('dispatch');
        dispatch(addBucketMenu(select));
    };
    return <AddMenuButton  addOrders={addOrders}/>
}

export default AddMenuButtonContainer;