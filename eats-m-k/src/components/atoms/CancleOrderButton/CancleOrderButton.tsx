import React from 'react';
import Trashcon from '../../../images/icon_delete@3x.png';

type Props = {
    cancleOrders:()=>void
}

const CancleOrderButton = ({cancleOrders}:Props) => {

    return (
        <div onClick={cancleOrders}><img src={Trashcon}></img>삭제하기</div>
    );
}

export default CancleOrderButton;