import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { RootState } from '../../../modules';
import { resetCount } from '../../../modules/counters';
import { addOrder } from '../../../modules/orderMenus';
import { increase } from '../../../modules/totalPrice';


type Props = {

    select:{
        menu:string,
        price:number
    }
    history:any

}

const AddMenuContainer = ({ select, history }:Props) => {

    const count = useSelector((state:RootState)=>state.counters.count);
    const dispatch = useDispatch();

    const addOrders = (menu:string, counts:number) => {

        dispatch(addOrder(menu, counts, select.price));
        dispatch(increase(counts * select.price));
        dispatch(resetCount());
        history.goBack();
        
    }

    return <AddMenuButton menu={select.menu} count={count} addOrders={addOrders}/>

}

export default AddMenuContainer;