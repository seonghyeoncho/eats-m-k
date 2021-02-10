import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../functions/addCommaFunc';
import { RootState } from '../../redux';
import './CurrentInfo.scss';

const CurrentInfo = () => {
    const storeName = window.localStorage.getItem('storeName');
    const table = window.localStorage.getItem('table');

    const { totalPrice } =useSelector((state:RootState) => ({
        totalPrice:state.Data.data.total_price,
    }))
    return (
        <div className={totalPrice === 0 ? 'currentinfo-none':'currentinfo'}>
            <div className="current-store">
                {storeName}
            </div>
            <div className="current-table">
                테이블 {table}
            </div>
            <div className="current-totalprice">
                {numberWithCommas(totalPrice)}원
            </div>
        </div>
    );
};

export default CurrentInfo;