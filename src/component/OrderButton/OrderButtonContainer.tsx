import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import OrderButton from './OrderButton';


const OrderButtonContainer = () => {
    const { totalPrice, orderStatus } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice,
        orderStatus:state.Data.data.orderStatus
    }));
    
    return(
        <>
            { 
                totalPrice === 0 ? <></>
                : <OrderButton text={orderStatus? '추가 주문하기':'주문하기'}/> 
            }
        </>
    );
}

export default OrderButtonContainer;