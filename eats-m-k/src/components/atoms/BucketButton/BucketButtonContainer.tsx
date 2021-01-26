import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButton from './BucketButton';
interface Props {

    orderStatus:boolean | undefined;
    store: string | string[] | null;
    table: string | string[] | null;

}


const BucketButtonContainer = ({orderStatus, store, table}:Props) => {

    return(
        <>
            {
                orderStatus ? 

                    <div className="bucket-block"></div>

                :

                    <BucketButton store={store} table={table} />

            }
        </>

       
        
    );

}

export default BucketButtonContainer;