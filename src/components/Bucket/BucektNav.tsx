import React from 'react';
import Arrow from '../../icons/icon_arrow_back_black_x3.png';

interface Props {
    goBack: () => void;
    popUpTrigger: () => void
}
const BucketNav = ({goBack,popUpTrigger}:Props) => {
    return (
        <div className="bucket-nav" >
            <div className="div1"><img src={Arrow} width="12px" onClick={goBack} alt="Arrow"/></div>
            <div className="div2"> 장바구니</div>
            <div onClick={popUpTrigger} className="div3">전체 삭제</div>
        </div>

    );
};

export default BucketNav;