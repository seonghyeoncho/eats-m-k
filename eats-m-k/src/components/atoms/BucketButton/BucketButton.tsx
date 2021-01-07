import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';

type Props = {
    status: boolean;
}
const BucketButton = ({status}:Props) => {

    const orderState = useSelector((state:RootState)=>state.stateSet.orderState);

    console.log('status',status)
    console.log(orderState);
   
    return (
        <div>
            <button>

                <div>장바구니</div>
                

            </button>
            

        </div>
    );

}

export default BucketButton;