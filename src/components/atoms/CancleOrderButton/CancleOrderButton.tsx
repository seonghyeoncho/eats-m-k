import React, { useState } from 'react';
import Trashcon from '../../../icons/icon_delete_x3.png';

type Props = {
    popUpTrigger: ()=>void
    
}

const CancleOrderButton = ({ popUpTrigger }:Props) => {

    return (
       
        <div onClick={popUpTrigger} style={{fontSize:"11px", opacity:"0.68", height:"17px", marginTop:"4px", display:"flex" }}>
            <img src={Trashcon} style={{width:"11px",height:"11.38px" ,marginRight:"6px", marginTop:"3px"}}></img>
            <div>삭제하기</div>
        </div>
    );
}

export default CancleOrderButton;