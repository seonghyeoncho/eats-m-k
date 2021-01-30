import React from 'react';
import P_img from '../../icons/icon_plus_x3.png';
import M_img from '../../icons/icon_minus_x3.png';
import { updateBucket } from '../../functions/updateBucket';

interface Props {
    c:number;
    id:string;
    menu:string;
    price:any;
    more:any;
    itemTotalPrice:number;
    store:string | string[] | null
    table:string | string[] | null
    totalPrice:number
    bucket:any
}

const ModifCount = ({c,id, menu, price, more, itemTotalPrice, totalPrice,bucket, store, table}:Props) => {
    var moreprice = price;
    more.forEach((doc:any) => {
        moreprice += doc.price;
    });

    const modifBucket = (i:number,totalPrice:number) => {
        console.log(c);
        console.log(bucket);
        console.log(more);

        const Obj = {

            menu: menu,
            price: price,
            count: c,
            more: more,
            id:`${menu}/${c}/${JSON.stringify(more)}`,
            itemTotalPrice: itemTotalPrice 

        }

        const modifBuc = bucket.map((item:any) => item.id === id 

            ? 
                Obj
            :
                item

        );

        updateBucket(store,table,modifBuc,totalPrice);
        
    };


    const modifMenuCount = (type:string) => {

        if(type === 'in'){

            c += 1
            itemTotalPrice += moreprice
            totalPrice += moreprice



        } else {

            c -= 1
            itemTotalPrice -= moreprice;
            totalPrice -= moreprice

        }

        if(more.length === 0 ){
            
           modifBucket(0,totalPrice);

        } else {

            modifBucket(1,totalPrice);

        }

    }
    
    const onIncrease = () => {

        modifMenuCount('in')

    }

    const onDecrease = () => {
        
        if(c !== 1) {

            modifMenuCount('de')

        }

    }

    return (
        <div className="modif-bucket-counter-con">
            <div className="modif-bucket-counter">
                <div onClick={()=>{onDecrease();}}><img src={M_img}/></div>
                <div className="count">{c}</div>
                <div onClick={()=>{onIncrease();}}><img src={P_img}/></div>
            </div>
            {/* */}
        </div>
        
    );
}

export default ModifCount;