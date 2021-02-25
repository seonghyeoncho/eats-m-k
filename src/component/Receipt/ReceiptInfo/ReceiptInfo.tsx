import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../redux';

const ReceiptInfo = () => {
    const store = window.localStorage.getItem('storeName');

    const { receiptTotalPrice, tableNumber } = useSelector((state:RootState) => ({
        receiptTotalPrice: state.Data.data.receipt_total_price,
        tableNumber:state.Data.tableNumber
    }));

    return (
        <>
            <div className="zigzag"/>
            <div className="receipt-info">
                <div className="store">{store}</div >
                <div className="table">테이블 {tableNumber}</div >
                <div className="totalprice">{numberWithCommas(receiptTotalPrice)}원</div >
            </div>
        </>
    );
};

export default ReceiptInfo;