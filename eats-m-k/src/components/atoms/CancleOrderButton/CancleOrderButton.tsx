import React from 'react';
import Trashcon from '../../../images/icon_delete@3x.png';

type Props = {
    cancleOrders:()=>void
}

const CancleOrderButton = ({cancleOrders}:Props) => {

    return (
        <button onClick={cancleOrders}><img src={Trashcon}></img></button>
    );
}

export default CancleOrderButton;