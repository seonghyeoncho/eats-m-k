import React from 'react';
import ReceiptButton from './ReceiptButton';

interface Props {

    store: string | string[] | null;
    table: string | string[] | null;
    state: boolean | undefined;
    orderStatus: boolean | undefined;

}
const ReceiptButtonContainer = ({store, table, state, orderStatus}:Props) => {

    return (

        <div>

            { 
                !orderStatus ? 

                    <></> 
                : 

                    <ReceiptButton orderStatus={orderStatus} state={state} store={store} table={table}/>
                    
            }

        </div>

    );

};

export default ReceiptButtonContainer;