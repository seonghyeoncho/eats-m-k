import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



type Props = {
    addOrders:()=>void 
    
}

const AddMenuButton = ({addOrders}:Props) => {

    return(

        <button onClick={addOrders}>장바구니에 담기</button>

    );


}

export default AddMenuButton;