import React from 'react';
import { BucketButtonContainer } from '../BucketButton';
import { OrderButtonContainer } from '../OrderButton';
import ReceiptButtonContainer from '../Receipt/ReceiptButton/ReceiptButtonContainer';

interface Props {
    homeNav: boolean;
}

const Buttons = ({homeNav}:Props) => {
    const table = window.localStorage.getItem('table');
    
    return (
        <div className={`${homeNav ? 'buttons-nav':'buttons-con '}`}>
            <div className="buttons-state">
                <ReceiptButtonContainer/>
                <div className="buttons-table">테이블 {table}</div>
                <BucketButtonContainer/>
            </div>
            <OrderButtonContainer/>
        </div>
    );
};

export default Buttons;
