import React from 'react';
import BucketButton from './BucketButton';
interface Props {

    store: string | string[] | null;
    table: string | string[] | null;
    orderStatus: boolean | undefined;
    totalPrice: number | undefined;

}


const BucketButtonContainer = ({ store, table, orderStatus,totalPrice}:Props) => {

    return(
        <>
            {
                totalPrice === 0 ? 

                    <div className="bucket-block"></div>

                :
                    <BucketButton store={store} table={table} />

            }

        </>

       
        
    );

}

export default BucketButtonContainer;