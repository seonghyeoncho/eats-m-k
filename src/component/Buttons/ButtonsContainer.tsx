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
        totalPrice:state.Data.data.total_price,
        receiptTotalPrice:state.Data.data.receipt_total_price,
    }));
    return (
        <>
            {
                totalPrice === 0 && receiptTotalPrice === 0? <div className={homeNav? '':''} >table</div>
                : <Buttons homeNav={homeNav}/>
            }
        </>
    );
};

export default ButtonsContainer;