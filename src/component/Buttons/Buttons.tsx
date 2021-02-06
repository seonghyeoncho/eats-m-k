import React from 'react';
import { BucketButtonContainer } from '../BucketButton';
import { OrderButtonContainer } from '../OrderButton';
import ReceiptButtonContainer from '../Receipt/ReceiptButton/ReceiptButtonContainer';

const Buttons = () => {
    
    return (
        <div className="buttons-con">
            <div className="buttons-state">
                <ReceiptButtonContainer/>
                <BucketButtonContainer/>
            </div>
            <OrderButtonContainer/>
        </div>
    );
};

export default Buttons;
