import React from 'react';
import StateIndicator from '../../component/Receipt/StateIndecator/StateIndicator';
import ReceiptInfo from '../../component/Receipt/ReceiptInfo/ReceiptInfo';
import ReceiptNav from '../../component/Receipt/ReceiptNav/ReceiptNav';
import ReceiptContent from '../../component/Receipt/ReceiptContent/ReceiptContent';
import CurrentInfo from '../BucketPage/CurrentInfo';

interface Props {
    history: any;
};

const ReceiptView = ({ history }:Props) => {

    const goBack = () => {
       history.goBack();
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