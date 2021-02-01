import React, { useState } from 'react';
import Trashcon from '../../image/icons/icon_delete_x3.png';

type Props = {
    popUpTrigger: ()=>void
};

const CancleOrderButton = ({ popUpTrigger }:Props) => {

    return (
        <div onClick={popUpTrigger} className="modif-bucket-delete-con">
            <img src={Trashcon} alt="Trash"/>
            <div>삭제하기</div>
        </div>
    );
}

export default CancleOrderButton;