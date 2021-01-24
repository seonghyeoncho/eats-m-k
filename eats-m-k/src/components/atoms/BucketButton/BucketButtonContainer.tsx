import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButton from './BucketButton';
interface Props {

    orderStatus:boolean | undefined

}


const BucketButtonContainer = ({orderStatus}:Props) => {

    const { store, table,totalPrice} = useSelector((state:RootState)=>({


        store:state.storeSet.store,
        table:state.tableSet.table,
        totalPrice:state.totalPrice.price
        
    }));
    console.log(orderStatus);



    return(
        <>
            {
                orderStatus ? 

                    <div className="bucket-block"></div>

                :

                    <BucketButton store={store} table={table} />

            }
        </>

       
        
    );

}

export default BucketButtonContainer;