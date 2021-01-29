import React from 'react'
import { useState } from 'react';
import CheckBoxDe from '../../../icons/icon_CheckBox_deselect_x3.png';
import CheckBox from '../../../icons/icon_CheckBox_selected_x3.png';
interface Props {
    menu:any;
    moreMenuHandler: ( m:any, checked:boolean ) => void;
}
const CheckItem = ({menu,moreMenuHandler}:Props) => {
    const [ select, setSelct ] = useState<boolean>(true);

    const checkHandler = (menu:string,s:boolean, price:number) => {
       
        const menuObj = {
            menu:menu,
            price:price
            
        }

        moreMenuHandler(menuObj , select);
    };


    return (

        <div className="checkbox-item-con" onClick={()=>{setSelct(!select);checkHandler(menu.menu, select, menu.price)}}>
            
            <div className="info">
                {
                    select ? 
                        <img alt="none" src={CheckBoxDe}/>
                    : 
                        <img alt="selected" src={CheckBox}/>

                }

                <div className="checkbox-item">
                    <div>{menu.menu}</div>
                </div>
            </div>

            <div>+ {menu.price}원</div>

        </div>

    );
}

export default CheckItem;