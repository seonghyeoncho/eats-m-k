import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Buttons from './Buttons';
import './Buttons.scss';

interface Props {
    homeNav: boolean;
};

const ButtonsContainer = ({homeNav}:Props) => {
    const { totalPrice, receiptTotalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice,
        receiptTotalPrice:state.Data.data.receipttotalprice,
    }));
    return (
        <>
            {
                totalPrice === 0 && receiptTotalPrice === 0? <></>
                : <Buttons homeNav={homeNav}/>
            }
        </>
    );
};

export default ButtonsContainer;