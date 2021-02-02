import React, { useEffect, useState } from 'react';
import ReceiptButtonContainer from '../Receipt/ReceiptButton/ReceiptButtonContainer';

type BoxProps = {
    store:string | string[] | null;
    table:string | string[] | null;
    state: boolean | undefined
    orderStatus: boolean | undefined
};

const StoreAndTableBox = ({ store, table }:BoxProps) => {
    return(
        <div className="store-nav-con">
            <div className="store-nav">
                <div className="store-nav-store">{store}</div>
                <div className="store-nav-table">테이블 {table}</div>
            </div>
            <div className="order-status-bt">
                <ReceiptButtonContainer/>
            </div>
        </div>
    );
};

export default StoreAndTableBox;