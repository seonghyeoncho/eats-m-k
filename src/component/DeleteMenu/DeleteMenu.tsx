import React from 'react';
import Trashcon from '../../image/icons/icon_delete_x3.png';

type Props = {
    popUpTrigger: () => void;
};

const DeleteMenu = ({ popUpTrigger }:Props) => {

    return (
        <div onClick={popUpTrigger} className="delete-con">
            <img src={Trashcon} alt="Trash"/>
            <div className="delete">삭제하기</div>
        </div>
    );
}

export default DeleteMenu;