import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../atoms/BackButton/BackButton';




const CompleteView = () => {


    return (
        <div>
            <div>주문완료!</div>
            <BackButton text={'홈으로'}/>
        </div>

    )
}

export default CompleteView;