import React from 'react';
import BucketButton from './BucketButton';

interface Props {
    totalPrice: number;
}

const BucketButtonContainer = ({totalPrice}:Props) => {

    const store = window.localStorage.getItem('store');
    const table = window.localStorage.getItem('table');

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