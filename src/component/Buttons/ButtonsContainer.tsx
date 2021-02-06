import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Buttons from './Buttons';
import './Buttons.scss';

const ButtonsContainer = () => {
    const { totalPrice, receiptTotalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice,
        receiptTotalPrice:state.Data.data.receipttotalprice,
    }));
    return (
        <>
            {
                totalPrice === 0 && receiptTotalPrice === 0? <></>
                : <Buttons/>
            }
        </>
    );
};

export default ButtonsContainer;