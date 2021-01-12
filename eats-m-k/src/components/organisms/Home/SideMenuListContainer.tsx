import { EBADF } from 'constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import SideMenuList from './SideMenuList';

const SideMenuListContainer = () => {
    const { sideMenus } = useSelector((state:RootState)=>({
        sideMenus:state.myBase.menus.data?.sidemenu

    }))
    console.log(sideMenus);

    return(
        <SideMenuList sideMenus={sideMenus}/>
    );
}
export default SideMenuListContainer;