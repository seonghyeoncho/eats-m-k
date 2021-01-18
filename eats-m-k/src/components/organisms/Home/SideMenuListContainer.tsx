import { EBADF } from 'constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import SideMenuList from './SideMenuList';

const SideMenuListContainer = () => {
    const { AC } = useSelector((state:RootState)=>({
        AC:state.myBase.menus.data?.AC

    }))
    console.log(AC);

    return(
        <SideMenuList AC={AC}/>
    );
}
export default SideMenuListContainer;