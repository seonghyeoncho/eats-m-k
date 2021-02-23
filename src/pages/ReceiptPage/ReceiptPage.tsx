import React from 'react';
import StateIndicator from '../../component/Receipt/StateIndecator/StateIndicator';
import ReceiptInfo from '../../component/Receipt/ReceiptInfo/ReceiptInfo';
import ReceiptNav from '../../component/Receipt/ReceiptNav/ReceiptNav';
import ReceiptContent from '../../component/Receipt/ReceiptContent/ReceiptContent';

interface Props {
    history: any;
};

const ReceiptView = ({ history }:Props) => {
    const storeId = JSON.parse(window.localStorage.getItem("storeId")!);
    const tableId = JSON.parse(window.localStorage.getItem("tableId")!);
    const goBack = () => {
       history.push(`/?store=${storeId}&table=${tableId}`);
    };
    return (
        <div className="receipt">
            <ReceiptNav goBack={goBack}/>
            <StateIndicator />
            <div className="receipt-content">
                <ReceiptInfo/>
                <ReceiptContent/>
            </div>
        </div>
    );
}

export default ReceiptView;