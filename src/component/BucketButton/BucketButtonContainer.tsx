import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import BucketButton from './BucketButton';
import './BucketButton.scss';

const BucketButtonContainer = () => {

    const { totalPrice } = useSelector((state:RootState) => ({
        totalPrice:state.Data.data.totalPrice
    }));

    return(
        <>
            {
                totalPrice === 0 ? <></>
                : <BucketButton/>
            }
        </> 
    );
}

export default BucketButtonContainer;