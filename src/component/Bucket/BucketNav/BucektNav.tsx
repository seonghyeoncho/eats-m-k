import React from 'react';
import Arrow from '../../../image/icons/icon_arrow_back_white_x3.png';
import './BucketNav.scss';

interface Props {
    goBack: () => void;
    popUpTrigger: () => void
}
const BucketNav = ({goBack,popUpTrigger}:Props) => {
    return (
        <div className="bucket-nav" >
            <div className="back-img">
                <img src={Arrow} onClick={goBack} alt="Arrow"/>
            </div>
            <div className="text"> 장바구니</div>
            <div onClick={popUpTrigger} className="reset">전체 삭제</div>
        </div>

    );
};

export default BucketNav;