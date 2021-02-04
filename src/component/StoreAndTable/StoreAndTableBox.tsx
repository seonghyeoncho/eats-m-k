import React from 'react';
import ReceiptButtonContainer from '../Receipt/ReceiptButton/ReceiptButtonContainer';

type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    state: boolean | undefined
    orderStatus: boolean | undefined
};

const StoreAndTableBox = ({ store, table }:BoxProps) => {
    return(
        <div className="nav">
            <div>
                <div className="store">{store}</div>
                <div className="table">테이블 {table}</div>
            </div>
            <div className="order-status-bt">
                <ReceiptButtonContainer/>
            </div>
        </div>
    );
};

export default StoreAndTableBox;