import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import OrderButton from './OrderButton';

const OrderButtonContainer = () => {
    const { totalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice,
    }));
    
    return(
        <div>
            { 
                totalPrice === 0 ? <></>
                : <OrderButton text={'주문하기'}/> 
            }
        </div>
    );
}

export default OrderButtonContainer;