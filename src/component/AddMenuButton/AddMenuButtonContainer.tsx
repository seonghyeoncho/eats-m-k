import React from 'react';
import { useDispatch } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { addBucketMenu } from '../../redux/actions/DataAction';

type Props = {
    select: {
        menu:string,
        price:number,
    };
};

const AddMenuButtonContainer = ({ select }:Props) => {
    const dispatch = useDispatch();
    const addOrders = () => {
        dispatch(addBucketMenu(select));
    };
    return <AddMenuButton  addOrders={addOrders}/>
}

export default AddMenuButtonContainer;