import React from 'react';
import { useSelector } from 'react-redux';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../redux';

const ReceiptInfo = () => {
    const { receiptTotalPrice, tableNumber,storeName } = useSelector((state:RootState) => ({
        receiptTotalPrice: state.Data.data.receipt_total_price,
        tableNumber:state.Data.tableNumber,
        storeName:state.Store.information.name
    }));

    return (
        <>
            <div className="zigzag"/>
            <div className="receipt-info">
                <div className="store">{storeName}</div >
                <div className="table">테이블 {tableNumber}</div >
                <div className="totalprice">{numberWithCommas(receiptTotalPrice)}원</div >
            </div>
        </>
    );
};

export default ReceiptInfo;