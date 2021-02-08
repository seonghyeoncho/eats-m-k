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
    const table = window.localStorage.getItem('table');
    return (
        <>
            {
                totalPrice === 0 && receiptTotalPrice === 0? <div className={homeNav? 'visible':'none'}>테이블{table}</div>
                : <Buttons homeNav={homeNav}/>
            }
        </>
    );
};

export default ButtonsContainer;