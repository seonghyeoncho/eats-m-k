import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import MenuList from './MenuList';
interface Props {

    state:number;
    store: string | string[] | null
    table: string | string[] | null
}


const MenuListContainer = ({state,store,table}:Props) => {

    const { menus,sideMenu,setMenu} = useSelector((state:RootState) => ({
        menus:state.myBase.menus.data?.menu,
        sideMenu:state.myBase.menus.data?.sidemenu,
        setMenu:state.myBase.menus.data?.setmenu
    }));
    if(state === 0){
        return <MenuList menus={menus} store={store} table={table}/>

    } else if (state === 1){
        return <MenuList menus={setMenu} store={store} table={table}/>

    } else {
        return <MenuList menus={sideMenu} store={store} table={table}/>

    }

}

export default MenuListContainer;