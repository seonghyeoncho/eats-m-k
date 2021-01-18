import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import { resetCount } from '../../../modules/counters';
import { increase } from '../../../modules/totalPrice';

type Props = {

    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };
    
    history: any
    

}

const AddMenuContainer = ({ select, history }:Props) => {

    const {count,store, table,buckets,totalPrice} = useSelector((state:RootState) => ({

        count:state.counters.count,
        store:state.storeSet.store,
        table:state.tableSet.table,
        buckets:state.myBucket.bucket.data?.bucket,
        totalPrice:state.totalPrice.price
        

    }));

    const dispatch = useDispatch();

    console.log(select);
    console.log('bucket',buckets);

    for(let i in buckets){
        console.log(buckets[i]);
        
    }

    

    const addOrders = () => {
        //for id data
        var a = '0'
        if( select.more === undefined) { a = '1' } 
        const Obj = buckets.concat({
            ...select,
            id:`${select.menu}/${count}/${a}`,
            
        })
        console.log(Obj);
        //set Total price
        dispatch(increase(select.itemTotalPrice));
        
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...Obj,
                
            ],
            'totalPrice': totalPrice + (select.price * count)   

        
        })

        dispatch(resetCount());
        history.goBack();
        
    }

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;