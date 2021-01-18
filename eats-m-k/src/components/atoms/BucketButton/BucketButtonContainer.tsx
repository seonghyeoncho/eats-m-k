import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import BucketButton from './BucketButton';



const BucketButtonContainer = () => {

    const { store, table} = useSelector((state:RootState)=>({


        store:state.storeSet.store,
        table:state.tableSet.table,
        
    }));



    return(

       <BucketButton store={store} table={table} />
        
    );

}

export default BucketButtonContainer;