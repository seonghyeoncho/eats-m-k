import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import { decrease, increase } from '../../../modules/totalPrice';

interface Props {
    c:number;
    id:string;
    menu:string;
    price:any;
    more:any;
    itemTotalPrice:number;
    totalPrice:number
    
}

const ModifCount = ({c,id, menu, price, more,itemTotalPrice,totalPrice}:Props) => {
    const { store, table, p} = useSelector((state:RootState)=>({

        store:state.storeSet.store,
        table:state.tableSet.table,
        p:state.totalPrice.price,
    }));
    
    const [ bucket, setBucekt ] = useState<any>([]);
    const [total, setTotal] = useState<number>();




    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`).onSnapshot(
            (snapShot:any)=>{
                const buckets = snapShot.data().bucket;
                const totalP = snapShot.data().totalPrice;
                console.log(buckets);
                console.log(total)

                
                setBucekt(buckets);
                setTotal(totalP);

            }
        )

    },[]);

    const dispatch = useDispatch();
    console.log(bucket);
    console.log(p);
    const modifBucket = (i:number) => {

        const Obj = {

            menu: menu,
            price: price,
            count: c,
            more: more,
            id:`${menu}/${c}/${i}`,
            itemTotalPrice: itemTotalPrice  

        }
        console.log(id)
        const modifBuc = bucket.map((item:any) => item.id == id 
        ? 
            Obj
        :
            item);

        console.log(totalPrice);

        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[
                ...modifBuc
            ],
            totalPrice:p


        });
        
    }

    const modifMenuCount = (type:string) => {

        if(type === 'in'){

            c += 1
            itemTotalPrice += price

        } else {
            c -= 1
            itemTotalPrice -= price

        }
        console.log(more.length);

        if(more.length === 0 ){
            
            modifBucket(0);
        } else {
            modifBucket(1);
        }

    }
    
    const onIncrease = () => {




        dispatch(increase(price));
        modifMenuCount('in')

    }

    const onDecrease = () => {
        
        if(c !== 1) {



            dispatch(decrease(price));
            modifMenuCount('de')
        }

    }

    useEffect(()=>{


    },[]);

    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <div>{c}</div>
            <button onClick={onIncrease}>+</button>
            {/* */}
        </div>
        
    );
}

export default ModifCount;