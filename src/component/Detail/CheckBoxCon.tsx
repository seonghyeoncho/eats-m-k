import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../firebase/firebase';
import { RootState } from '../../redux';
import CheckItem from './CheckItem';


interface Props {
    
    moreMenuHandler: ( m:any, checked:boolean ) => void;

}
const CheckBoxCon = ({ moreMenuHandler }:Props) => {
    const { option } = useSelector((state:RootState)=>({
        option:state.Store.menu.optionGroups
    }))
    

    return (
        <div className="checkbox-con">

            {/* {
                AC?.map((doc:any)=>{
                   
                        return <CheckItem key={doc.menu} menu={doc} moreMenuHandler={moreMenuHandler} />
                })
            } */}
        </div>
    );
}

export default CheckBoxCon;