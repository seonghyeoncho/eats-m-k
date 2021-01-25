import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import { RootState } from '../../../modules';
import { decrease, increase } from '../../../modules/totalPrice';
import P_img from '../../../icons/icon_plus_x3.png';
import M_img from '../../../icons/icon_minus_x3.png';

interface Props {
    c:number;
    id:string;
    menu:string;
    price:any;
    more:any;
    itemTotalPrice:number;
    totalPrice:number;
    store:string | string[] | null
    table:string | string[] | null
    
}

const ModifCount = ({c,id, menu, price, more,itemTotalPrice,totalPrice, store, table}:Props) => {
    const { p} = useSelector((state:RootState)=>({

        
        p:state.totalPrice.price,
    }));
    
    const [ bucket, setBucekt ] = useState<any>([]);
    const [total, setTotal] = useState<number>(totalPrice);

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
        );


    },[]);

    const dispatch = useDispatch();

    const modifBucket = (i:number) => {

        const Obj = {

            menu: menu,
            price: price,
            count: c,
            more: more,
            id:`${menu}/${c}/${i}`,
            itemTotalPrice: itemTotalPrice  

        }

        const modifBuc = bucket.map((item:any) => item.id == id 
            ? 
                Obj
            :
                item
        );

        console.log(totalPrice);

        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[
                ...modifBuc
            ],
            'totalPrice':total


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

    return (
        <div className="modif-bucket-counter-con">
            <div className="modif-bucket-counter">
                <div onClick={onDecrease}><img src={M_img} width="10px"/></div>
                <div>{c}</div>
                <div onClick={onIncrease}><img src={P_img} width="10px"/></div>
            </div>
            {/* */}
        </div>
        
    );
}

export default ModifCount;