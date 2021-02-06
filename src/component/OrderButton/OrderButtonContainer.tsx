import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import OrderButton from './OrderButton';

const OrderButtonContainer = () => {
    const { totalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice,
    }));
    const func = () => {
    }
    return(
        <div className="order-bt">
            { 
                totalPrice === 0 ? <></>
                : <OrderButton text={'주문하기'} func={func}/> 
            }
        </div>
    );
}

export default OrderButtonContainer;