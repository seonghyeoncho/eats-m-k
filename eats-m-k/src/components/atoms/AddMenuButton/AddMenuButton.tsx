import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrder } from '../../../modules/orderMenus';


type Props = {

    count:number;
    menu:string;
    addOrders:(menu:string, count:number, id:string)=>void 
    
}

const AddMenuButton = ({menu, count, addOrders}:Props) => {
    const id = `${menu}/${count}/more.0`
    return(

        <button onClick={()=>addOrders(menu, count, id)}>장바구니에 담기</button>

    );


}

export default AddMenuButton;