import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { RootState } from '../../../modules';
import { resetCount } from '../../../modules/counters';
import { addOrder } from '../../../modules/orderMenus';
import { increase } from '../../../modules/totalPrice';
import { useCookies } from 'react-cookie';
import { dbService } from '../../../firebase';
import { getBucketThunk } from '../../../modules/getBucket/thunks';


type Props = {

    select:{
        menu:string,
        price:number,
        more:[]
    }
    history:any

}

const AddMenuContainer = ({ select, history }:Props) => {

    const {count,store, table,buckets} = useSelector((state:RootState) => ({
        count:state.counters.count,
        store:state.storeSet.store,
        table:state.tableSet.table,
        buckets:state.myBucket.buckets.data?.bucket
    }));
    const dispatch = useDispatch();

    console.log(select);

    const addOrders = () => {

        console.log(buckets);

        dbService.collection(`${store}`).doc(`${table}`).update({
        
            
            
        
            bucket:{
                
                ...select,
                ...buckets

            }
           
            


        })
        history.goBack();
        
    }

    return <AddMenuButton menu={select.menu} count={count} addOrders={addOrders}/>

}

export default AddMenuContainer;