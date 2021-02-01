import React from 'react';
import { useDispatch } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { addBucketMenu } from '../../redux/actions/DataAction';
import './AddMenuButton.scss';

type Props = {
    select: {
        menu:string,
        price:number,
    };
};

const AddMenuButtonContainer = ({ select }:Props) => {
    console.log(select);
    const dispatch = useDispatch();
    const addOrders = () => {
        console.log('dispatch')
        dispatch(addBucketMenu(select));
    };
    return <AddMenuButton  addOrders={addOrders}/>
}

export default AddMenuButtonContainer;