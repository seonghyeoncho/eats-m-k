import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderButton from './OrderButton';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';

interface Props {

    totalPrice:number
    orderStatus:boolean | undefined

}

const OrderButtonContainer = ({totalPrice,orderStatus}:Props) => {

    return(
        <>

            { 
                totalPrice === 0 || orderStatus  ? 

                    <></> 
                : 
                
                    <OrderButton />
                
            }
        </>
    );
}

export default OrderButtonContainer;