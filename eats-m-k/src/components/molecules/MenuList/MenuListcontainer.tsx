import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import MenuList from './MenuList';


const MenuListContainer = () => {

    const { menus } = useSelector((state:RootState) => ({
        menus:state.myBase.menus.data?.menu
    }));
    
    


    

    return <MenuList menus={menus}/>
}

export default MenuListContainer;