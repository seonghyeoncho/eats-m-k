import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import BucketButton from './BucketButton';
import './BucketButton.scss';

const BucketButtonContainer = () => {

    const { store, table, totalPrice } = useSelector((state:RootState) => ({
        store:state.Store.information.name,
        table:state.Location.table,
        totalPrice:state.Data.data.totalPrice
    }));

    return(
        <>
            {
                totalPrice === 0 ? <div className="bucket-block"></div> 
                : <BucketButton store={store} table={table} />
            }
        </> 
    );
}

export default BucketButtonContainer;