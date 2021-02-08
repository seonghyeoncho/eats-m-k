import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../redux';

const ReceiptInfo = () => {
    const store = window.localStorage.getItem('storeName');
    const table = window.localStorage.getItem('table');

    const { receiptTotalPrice } = useSelector((state:RootState) => ({
        receiptTotalPrice: state.Data.data.receipttotalprice,
    }));

    return (
        <>
            <div className="zigzag"/>
            <div className="receipt-info">
                <div className="store">{store}</div >
                <div className="table">테이블 {table}</div >
                <div className="totalprice">{numberWithCommas(receiptTotalPrice)}원</div >
            </div>
        </>
    );
};

export default ReceiptInfo;