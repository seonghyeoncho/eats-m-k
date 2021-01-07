import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrder } from '../../../modules/orderMenus';


type Props = {

    count:number;
    menu:string;
    addOrders:(menu:string, count:number)=>void 
    
}

const AddMenuButton = ({menu, count, addOrders}:Props) => {
    
    return(

        <button onClick={()=>addOrders(menu, count)}>장바구니에 담기</button>

    );


}

export default AddMenuButton;