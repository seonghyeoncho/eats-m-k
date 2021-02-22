import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    addOrders:()=>void 
};

const AddMenuButton = ({addOrders}:Props) => {
    const store = JSON.parse(window.localStorage.getItem('storeId')!);
    const table = JSON.parse(window.localStorage.getItem('tableId')!);
    return(
        <Link to={`/?store=${store}&table=${table}`} className="addmenu-bt" onClick={addOrders}>
            <div>
                <div className="addmenu-text">장바구니 담기</div>
            </div>
        </Link>
    );
};

export default AddMenuButton;