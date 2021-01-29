import React from 'react'
import { useState } from 'react';

interface Props {
    menu:any;
    moreMenuHandler: ( m:any, checked:boolean ) => void;
}
const CheckItem = ({menu,moreMenuHandler}:Props) => {
    const [check, setCheck] = useState<boolean>(false);

    const checkHandler = ({ target }:any) => {
        console.log(target);
        console.log(target.value, target.checked)
        setCheck(!check);
        const menuObj = {
            menu:target.name,
            price:Number(target.value)
            
        }
        moreMenuHandler(menuObj , target.checked);
    };


    return (

        <div className="checkbox-item-con">
            <div className="checkbox-item">
                <input type="checkbox" checked={check} name={menu.menu} value={menu.price} onChange={(e)=>checkHandler(e)} />
                <div>{menu.menu}</div>
            </div>
            <div>+{menu.price}원</div>

        </div>

    );
}

export default CheckItem;