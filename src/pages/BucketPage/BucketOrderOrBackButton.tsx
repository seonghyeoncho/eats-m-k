import React from 'react'
import BackButton from '../../components/atoms/BackButton/BackButton';
import OrderButton from '../../components/atoms/OrderButton/OrderButton';

interface Props {
    length: number;
    orderStatus: boolean | undefined;

}

const BucketOrderOrBackButton = ({length, orderStatus}:Props) => {
    return(
        <>
            { 
                length !== 0 ? 
                    <OrderButton text={orderStatus  ? '추가 주문하기' :'주문하기' }/> 
                :
                    <BackButton text={length !== 0 ? '추가하기' : orderStatus  ? '추가 주문하기' : '주문하기'}/>
            }
        </>

    );
};
export default BucketOrderOrBackButton;