import React from 'react';
import { Link } from 'react-router-dom';
import ToHomeButton from '../components/atoms/BackButton/ToHomeButton';




const CompleteView = () => {


    return (
        <div>
            <div>주문완료!</div>
            <ToHomeButton text={'홈으로'}/>
        </div>

    )
}

export default CompleteView;