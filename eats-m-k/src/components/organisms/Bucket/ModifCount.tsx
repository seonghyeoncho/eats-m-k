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
    
}

const ModifCount = ({c,id, menu, price, more,itemTotalPrice}:Props) => {


    const [ modifPrice, setModifPrice ] = useState<number>(itemTotalPrice);
    const { bucket,store, table, p} = useSelector((state:RootState)=>({
        bucket:state.myBucket.bucket.data?.bucket,
        store:state.storeSet.store,
        table:state.tableSet.table,
        p:state.totalPrice.price
    }));

    const dispatch = useDispatch();
    console.log(bucket);


    const modifMenuCount = (type:string) => {

        if(type === 'in'){

            c += 1

        } else {
            c -= 1

        }
        const Obj = {

            menu:menu,
            price:price,
            count:c,
            more:more,
            id:id,
            itemTotalPrice:modifPrice

        }

        const Buc = bucket.filter((doc:any) => doc.id !== id);

        const modifBuc = Buc.concat(Obj);
        console.log(modifBuc);
        
        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[
                ...modifBuc
            ],


        });


    }
    
    const onIncrease = () => {


        setModifPrice(modifPrice + price);
        modifMenuCount('in')

    }

    const onDecrease = () => {
        
        if(c !== 1) {

            setModifPrice(modifPrice - price);
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