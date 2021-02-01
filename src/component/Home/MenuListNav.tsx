import React from 'react';
import BucketButtonContainer from '../BucketButton/BucketButtonContainer';
import MenuListButton from './MenuListButton';

interface Props {
    setMenuListState:(n:number) => void;
    menuListState: number;
    totalPrice: number;
}
const MenuListNav = ({ menuListState,setMenuListState,totalPrice}:Props) => {

    return(
        <div className="menulist-nav">
            <MenuListButton menuListState={menuListState} setMenuListState={setMenuListState}/>
            <BucketButtonContainer />
        </div>

    );
};

export default MenuListNav;