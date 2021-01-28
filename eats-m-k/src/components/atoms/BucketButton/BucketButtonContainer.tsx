import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase';
import BucketButton from './BucketButton';
interface Props {

    store: string | string[] | null;
    table: string | string[] | null;
    orderStatus: boolean | undefined

}


const BucketButtonContainer = ({ store, table, orderStatus}:Props) => {

    const totalPrice = Number(window.localStorage.getItem('totalPrice'));
    

    return(
        <>
            {
                totalPrice === 0 || orderStatus ? 

                    <div className="bucket-block"></div>

                :
                    <BucketButton store={store} table={table} />

            }

        </>

       
        
    );

}

export default BucketButtonContainer;