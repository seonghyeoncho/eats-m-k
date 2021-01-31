import React from 'react';
import numberWithCommas from '../../functions/addCommaFunc';

interface Props {
    menu: string;
    itemTotalPrice: number;
    count: number;
    price: number;
}

const BucketItemInfo = ({menu, itemTotalPrice, count, price}:Props) => {
    return (
        <>
            <div className="bucket-item-info">
                <div>{menu}</div>
                <div>{numberWithCommas(itemTotalPrice)}원</div>
            </div>
            <div className="bucket-item-count">
                <div>개수 : {count}개</div>
                <div>{numberWithCommas(price)}원</div>
            </div>
        </>
    );
};
export default BucketItemInfo;