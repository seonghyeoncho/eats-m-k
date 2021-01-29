import React from 'react';
import BucketButtonContainer from '../../components/atoms/BucketButton/BucketButtonContainer';
import MenuListButton from './MenuListButton';
import { OrderStatus } from '../../types/types';

interface Props {
    setMenuListState:(n:number) => void;
    menuListState: number;
    totalPrice: number;
}
const MenuListNav = ({ menuListState,setMenuListState,totalPrice}:Props) => {

    return(
        <div className="menulist-nav">
            <MenuListButton menuListState={menuListState} setMenuListState={setMenuListState}/>
            <BucketButtonContainer totalPrice={totalPrice}/>
        </div>

    );
};

export default MenuListNav;