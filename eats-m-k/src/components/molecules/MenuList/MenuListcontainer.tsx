import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import MenuList from './MenuList';
interface Props {

    state:number
}


const MenuListContainer = ({state}:Props) => {

    const { menus,sideMenu,setMenu} = useSelector((state:RootState) => ({
        menus:state.myBase.menus.data?.menu,
        sideMenu:state.myBase.menus.data?.sidemenu,
        setMenu:state.myBase.menus.data?.setmenu
    }));
    if(state === 0){
        return <MenuList menus={menus}/>

    } else if (state === 1){
        return <MenuList menus={setMenu}/>

    } else {
        return <MenuList menus={sideMenu}/>

    }

}

export default MenuListContainer;