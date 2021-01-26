import React, { useEffect, useState } from 'react';
import { dbService } from '../../../firebase';
import BucketButton from './BucketButton';
interface Props {

    store: string | string[] | null;
    table: string | string[] | null;


}


const BucketButtonContainer = ({ store, table, }:Props) => {

    const [ totalPrice, setTotalPrice ] = useState<number>();

    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            setTotalPrice(snapShot.data().totalPrice);
        });
    },[]);

    return(
        <>
            {
                totalPrice === 0  ? 

                    <div className="bucket-block"></div>

                :

                    <BucketButton store={store} table={table} />

            }
        </>

       
        
    );

}

export default BucketButtonContainer;