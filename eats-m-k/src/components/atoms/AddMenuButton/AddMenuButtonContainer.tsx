import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import { resetCount } from '../../../modules/counters';
import { increase } from '../../../modules/totalPrice';

type Props = {

    select: {

        menu: string,
        price: number,

    }
    more:[]
    history: any
    

}

const AddMenuContainer = ({ select, history,more }:Props) => {

    const {count,store, table,buckets} = useSelector((state:RootState) => ({

        count:state.counters.count,
        store:state.storeSet.store,
        table:state.tableSet.table,
        buckets:state.myBucket.bucket.data?.bucket,
        

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
        if(more === undefined) { a = '1' } 
        const Obj = buckets.concat({
            ...select,
            count:count, 
            id:`${select.menu}/${count}/${a}`,
            more:more
        })
        console.log(Obj);
        //set Total price
        dispatch(increase(select.price * count));
        
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...Obj,
               
                
            ]

        
        })

        dispatch(resetCount());
        history.goBack();
        
    }

    return <AddMenuButton menu={select.menu} count={count} addOrders={addOrders}/>

}

export default AddMenuContainer;