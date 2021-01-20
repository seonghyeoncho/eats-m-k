import { EBADF } from 'constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import SideMenuList from './SideMenuList';

const SideMenuListContainer = () => {
    const { sideMenu } = useSelector((state:RootState)=>({
        sideMenu:state.myBase.menus.data?.sidemenu

    }))
    console.log(sideMenu);

    return(
        <SideMenuList sideMenu={sideMenu}/>
    );
}
export default SideMenuListContainer;