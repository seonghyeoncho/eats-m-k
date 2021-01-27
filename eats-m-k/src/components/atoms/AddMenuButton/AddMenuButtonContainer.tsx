import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { dbService } from '../../../firebase';
import { resetCount } from '../../../modules/counters';
import { compareAndMerge } from '../../../functions/compareAndMerge';


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

    const [ buckets, setBuckets ] = useState<any>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    const test = window.localStorage.getItem('bucket');

    const dispatch = useDispatch();
    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
            setBuckets(doc.data().bucket);
            setTotalPrice(doc.data().totalPrice);

        });

    },[store, table]);

    const processA = ( a:string ) : void => {

        const Obj = buckets.concat({
                
            ...select,
            id:`${select.menu}/${select.count}/${JSON.stringify(select.more)}`
            
        });
    
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
                ...Obj,
                
            ],
            'totalPrice': totalPrice + select.itemTotalPrice  
        });
        window.localStorage.setItem('bucket', Obj);
        window.localStorage.setItem('totalPrice', (totalPrice + select.itemTotalPrice).toString());

    }

    const processM = ( a:string ) => {

        console.log('process Merge')

        const Obj = buckets.map( (doc:any) =>
            doc.menu === select.menu && compareAndMerge(doc.more, select.more) ? 

                {
                    ...select,
                    count:doc.count + select.count,
                    itemTotalPrice: Number(doc.itemTotalPrice) + Number(select.itemTotalPrice),
                    id:`${select.menu}/${doc.count + select.count}/${JSON.stringify(select.more)}`,
                    
                }

            :

                doc

        );
        console.log("Obj",Obj);
        var p:number = 0;
        Obj.map((doc:any) => 
            p += doc.itemTotalPrice
        );
        console.log("Obj",Obj);
    
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[

                ...Obj,
                
            ],
            'totalPrice': p
        });
        console.log("Obj",...Obj);

    }

    const addOrders = () => {

        var a = '0'

        if( select.more.length !== 0) { a = '1' } 
        if( buckets.length !== 0 ) {
            const c = buckets.length;
            var flag = 0;

            for( let i=0 ; i<buckets.length ; i++ ) {
                
                console.log(buckets[i], i)
                if( buckets[i].menu === select.menu && compareAndMerge(buckets[i].more, select.more) ) {

                    console.log(compareAndMerge(buckets[i].more, select.more));

                    processM(a);

                    break;

                }
                flag++;
                
            }; 
            console.log(flag)
            if(flag === c ) processA(a);

        } else {

            processA(a);

        }

        dispatch(resetCount());
        history.goBack();

    }

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;