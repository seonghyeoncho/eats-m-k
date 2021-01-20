import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderButton from './OrderButton';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { setState } from '../../../modules/orderState';
import { resetPrice } from '../../../modules/totalPrice';


const OrderButtonContainer = () => {


    return(
        <OrderButton />
    );
}

export default OrderButtonContainer;