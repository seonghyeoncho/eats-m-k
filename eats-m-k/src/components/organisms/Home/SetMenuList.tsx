import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import Ready from '../../../graphics/graphic_ready.png';

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
export default SetMenuList;