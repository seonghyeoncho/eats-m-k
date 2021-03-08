import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../functions/addCommaFunc';
import { RootState } from '../../redux';
import './CurrentInfo.scss';

const CurrentInfo = () => {
    const { totalPrice, tableNumber, storeName } =useSelector((state:RootState) => ({
        totalPrice:state.Data.data.total_price,
        tableNumber:state.Data.tableNumber,
        storeName:state.Store.information.name
    }));

    return (
        <div className={totalPrice === 0 ? 'currentinfo-none':'currentinfo'}>
            <div className="current-store">
                {storeName}
            </div>
            <div className="current-table">
                테이블 {tableNumber}
            </div>
            <div className="current-totalprice">
                {numberWithCommas(totalPrice)}원
            </div>
        </div>
    );
};

export default CurrentInfo;