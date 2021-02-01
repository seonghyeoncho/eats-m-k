import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import ReceiptButton from './ReceiptButton';

const ReceiptButtonContainer = () => {
    const { state, orderStatus } = useSelector((state:RootState) => ({
        state: state.Data.data.state,
        orderStatus: state.Data.data.orderStatus
    }));
    return (
        <div>
            { 
                !orderStatus ? <></> 
                : <ReceiptButton orderStatus={orderStatus} state={state}/> 
            }
        </div>
    );
};

export default ReceiptButtonContainer;