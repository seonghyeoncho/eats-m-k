import React, { useEffect, useState } from 'react';
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
    
    history: any;
    store: string | string[] | null
    table: string | string[] | null
    

}

const AddMenuContainer = ({ select, history, store, table }:Props) => {



    const {count} = useSelector((state:RootState) => ({

        count:state.counters.count,
        totalPrice:state.totalPrice.price
        

    }));
    const [ buckets, setBuckets ] = useState<any>([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const dispatch = useDispatch();
    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
            setBuckets(doc.data().bucket);
            setTotalPrice(doc.data().totalPrice);

        })
    },[store, table]);

    const processA = (a:string) => {
        const Obj = buckets.concat({
                
            ...select,
            id:`${select.menu}/${select.count}/${a}`
            
        })
        dispatch(increase(select.itemTotalPrice));
    
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
            ...Obj,
                
            ],
            'totalPrice': totalPrice + select.itemTotalPrice  
        });

    }
    const processM = (a:string) => {

        const Obj = buckets.map( (doc:any) =>
            doc.menu === select.menu ? 

                {
                    ...select,
                    count:doc.count + select.count,
                    itemTotalPrice: Number(doc.itemTotalPrice) + Number(select.itemTotalPrice),
                    id:`${select.menu}/${doc.count + select.count}/${a}`,
                    
                }

            :

                doc

        );
        
        var p:number = 0;
        Obj.map((doc:any) => 
            p += doc.itemTotalPrice
        );
           
        dispatch(increase(select.itemTotalPrice));
    
        dbService.collection(`${store}`).doc(`${table}`).update({

            bucket:[
            ...Obj,
                
            ],
            'totalPrice': p
        });

    }

    

    const addOrders = () => {

        var a = '0'

        if( select.more.length !== 0) { a = '1' } 
        if( buckets.length !== 0 ) {

            buckets.forEach((doc:any) => {
                console.log(doc.menu)

                if(doc.menu === select.menu){
                    if( doc.more.length === 0 && select.more.length === 0 ){
                        console.log('TEST')
                        processM(a);
                        
                    } else{}

                } else {
                    processA(a);
                }

            });

        } else {
            processA(a);
        }

        dispatch(resetCount());
        history.goBack();

    }

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;