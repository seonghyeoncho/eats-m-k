import React from 'react';
import Ready from '../../../graphics/graphic_ready.png';
interface Props {
    sideMenu: [] | undefined
}

const SideMenuList = ({sideMenu}:Props) => {


    return(
        <div>
            {
                sideMenu?.values.length === 0 ? 
                <>
                    <img src={Ready}/>
                    <div>메뉴 준비중입니다</div>
                </>
            :
                <div>세트메뉴입니다!</div>
                
            }

        </div>
    ); 
}

export default SideMenuList;