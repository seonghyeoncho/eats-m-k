import React from 'react';
import StateIndicator from '../../component/Receipt/StateIndecator/StateIndicator';
import ReceiptInfo from '../../component/Receipt/ReceiptInfo/ReceiptInfo';
import ReceiptNav from '../../component/Receipt/ReceiptNav/ReceiptNav';
import ReceiptContent from '../../component/Receipt/ReceiptContent/ReceiptContent';

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
            <ReceiptInfo/>
            <ReceiptContent/>
        </div>
    );
}

export default ReceiptView;