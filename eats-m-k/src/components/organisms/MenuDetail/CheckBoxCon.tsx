import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';

interface Props {

    onClick: (doc:any) => void
}


const CheckBoxCon = ({onClick}:Props) => {



    const { sideMenus } = useSelector((state:RootState)=>({
        sideMenus: state.myBase.menus.data?.sidemenu
    }))


    return (
        <div>
            {
                sideMenus?.map((doc:any)=>{
                    for(let i in doc){
                        return <div onClick={()=>onClick(doc)}>{i}</div>
                    }
                })
            }
        </div>
    );
}

export default CheckBoxCon;