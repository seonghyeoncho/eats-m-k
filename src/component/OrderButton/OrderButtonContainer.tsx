import React from 'react';
import OrderButton from './OrderButton';

interface Props {

    totalPrice:number
    orderStatus:boolean | undefined

}

const OrderButtonContainer = ({totalPrice,orderStatus}:Props) => {

    return(
        <>
            { 
                totalPrice === 0?
                    <></>
                :
                    <OrderButton text={orderStatus? '추가 주문하기':'주문하기'}/> 
            }
        </>
    );
}

export default OrderButtonContainer;