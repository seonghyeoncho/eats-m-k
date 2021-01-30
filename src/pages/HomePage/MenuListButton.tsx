import React from 'react';

interface Props {
    menuListState:number
    setMenuListState:(n:number)=>void
}

const MenuListButton = ({menuListState,setMenuListState}:Props) => {

    return(
        <div className="menulist-bts-con">
            <div className={`text ${menuListState === 0 ? 'selected' : ''}`}>
                <div onClick={()=>{setMenuListState(0);}}>단품메뉴</div>
            </div>
            <div className={`text ${menuListState === 1 ? 'selected' : ''}`}>
                <div onClick={()=>{setMenuListState(1);}}>세트메뉴</div>
            </div>
            <div className={`text ${menuListState === 2 ? 'selected' : ''}`}>
                <div onClick={()=>{setMenuListState(2);}}>사이드메뉴</div>
            </div>
        </div>
    );
    
};

export default MenuListButton;