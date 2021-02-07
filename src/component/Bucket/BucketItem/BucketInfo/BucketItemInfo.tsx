import React from 'react';
import numberWithCommas from '../../../../functions/addCommaFunc';
import './BucketItemInfo.scss';
interface Props {
    name: string;
    itemTotalPrice: number;
    count: number;
    price: number;
}

const BucketItemInfo = ({name, itemTotalPrice, count, price}:Props) => {
    return (
        <div className="info">
            <div className="name">
                <div>{name}</div>
                <div>{numberWithCommas(itemTotalPrice)}원</div>
            </div>
            <div className="count">
                <div>수량 : {count}개</div>
                <div>{numberWithCommas(price)}원</div>
            </div>
        </div>
    );
};
export default BucketItemInfo;