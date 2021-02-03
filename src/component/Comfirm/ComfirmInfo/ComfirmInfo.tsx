import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import './ComfirmInfo.scss';

interface Props {
    store: string | null;
    table: string | null;
    totalPrice: number;
};

const ComfirmInfo = ({store, table, totalPrice}: Props) => {
    return (
        <div className="info">
            <div className="store">{store}</div>
            <div className="table">테이블 {table}</div>
            <div className="price">{numberWithCommas(totalPrice)}원</div>
        </div>
    );
};

export default ComfirmInfo;