import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import { resetCount } from '../../../modules/counters';
import { increase } from '../../../modules/totalPrice';
import { useCookies } from 'react-cookie';

type Props = {

    select: {

        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number

    };
    
    history: any;
    store: string | string[] | null
    table: string | string[] | null
    

}

const AddMenuContainer = ({ select, history, store, table }:Props) => {

    const [ cookies, setCookie, removeCookie ] = useCookies(['clientId', 'bucket', 'store', 'table']);

    const {count} = useSelector((state:RootState) => ({

        count:state.counters.count,
        totalPrice:state.totalPrice.price
        

    }));
    const [ buckets, setBuckets ] = useState<any>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const dispatch = useDispatch();

    console.log(select);
    console.log('bucket',buckets);
    console.log('cookie bucket test', cookies.bucket)

    for(let i in buckets){
        console.log(buckets[i]);
        
    }
    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
            setBuckets(doc.data().bucket);
            setTotalPrice(doc.data().totalPrice);

        })
    },[])

    

    const addOrders = () => {
        //for id data
        var a = '0'
        console.log(select.more)
        if( select.more.length !== 0) { a = '1' } 
        const Obj = buckets.concat({
            ...select,
            id:`${select.menu}/${count}/${a}`,
            
        })
        console.log(Obj);
        console.log(select.itemTotalPrice);
        //set Total price
        dispatch(increase(select.itemTotalPrice));
        
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
               ...Obj,
                
            ],
            'totalPrice': totalPrice + select.itemTotalPrice  
        });
        if(cookies.bucket === undefined){
            const arrayObj2 = [
                {
                    ...select,
                    id:`${select.menu}/${count}/${a}`
    
                }
            ]
            setCookie('bucket', arrayObj2, {path:'/'});

        } else {
            const arrayObj2 = [
                ...cookies.bucket,
                {
                    ...select,
                    id:`${select.menu}/${count}/${a}`
    
                }
            ]
            setCookie('bucket', arrayObj2,  {path:'/'});

        }
       

        console.log('cookie bucket test',cookies.bucket)
        

        dispatch(resetCount());
        history.goBack();
        
    }

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;