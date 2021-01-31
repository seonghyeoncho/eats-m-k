import React from 'react';


type Props = {
    addOrders:()=>void 
    
}

const AddMenuButton = ({addOrders}:Props) => {

    return(

        <div onClick={addOrders} className="addmenu-bt">장바구니 담기</div>

    );


}

export default AddMenuButton;