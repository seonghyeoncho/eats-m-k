import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';

interface Props {
    menu:string;
    price:number
}
const DetailInfo = ({menu, price}:Props) => {
    return (
        <div className="detail-info-con">
            <div className="detail-info">
                <div className="detail-info-menu">{menu}</div>
            </div>
            <div>{numberWithCommas(price)}원</div>
        </div>
    );
};

export default DetailInfo;

