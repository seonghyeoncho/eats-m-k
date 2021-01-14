import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';

const SetMenuList = () => {

    const {setMenu} = useSelector((state:RootState)=>({
        setMenu:state.myBase.menus.data?.setmenu
    }))
    console.log(setMenu?.length)
    console.dir(setMenu?.values.length)

    return(
        <div>
            {
                setMenu?.values.length === 0 ? 
                    <div>메뉴 준비중입니다</div>
                :
                    <div>세트메뉴입니다!</div>

            }
        </div>
    );
}
export default SetMenuList;