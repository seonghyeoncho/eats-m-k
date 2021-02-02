import React from 'react';
import Arrow from '../../../image/icons/icon_arrow_back_black_x3.png'

interface Props {
    goBack: () => void
}

const ReceiptNav = ({ goBack }:Props) => {
    return (
        <div className="nav">
            <div className="img">
                <img src={Arrow} width="12px" onClick={goBack} alt="Arrow"/>
            </div>
            <div className="text">주문현황</div>
        </div>
    );
};

export default ReceiptNav;