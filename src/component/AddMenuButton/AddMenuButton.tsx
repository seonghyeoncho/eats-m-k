import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    addOrders:()=>void 
};

const AddMenuButton = ({addOrders}:Props) => {
    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');
    return(
        <Link to={`/?store=${store}&table=${table}`} className="addmenu-bt" onClick={addOrders}>
            <div>
                <div className="addmenu-text">장바구니 담기</div>
            </div>
        </Link>
    );
};

export default AddMenuButton;