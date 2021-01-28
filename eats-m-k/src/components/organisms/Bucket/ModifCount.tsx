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
    store:string | string[] | null
    table:string | string[] | null
    totalPrice:number
    bucket:any
    reRednder: () => void
    
}

const ModifCount = ({c,id, menu, price, more, itemTotalPrice, totalPrice,bucket, reRednder}:Props) => {
    var moreprice = price;
    more.forEach((doc:any) => {
        moreprice += doc.price;
    });

    const modifBucket = (i:number,totalPrice:number) => {
        console.log(c);
        console.log(bucket);

        const Obj = {

            menu: menu,
            price: price,
            count: c,
            more: more,
            id:`${menu}/${c}/${more}`,
            itemTotalPrice: itemTotalPrice 

        }

        const modifBuc = bucket.map((item:any) => item.id === id 

            ? 
                Obj
            :
                item

        );

        window.localStorage.setItem('bucket', JSON.stringify(modifBuc));
        window.localStorage.setItem('totalPrice', totalPrice.toString() );
        
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
                <div onClick={()=>{onDecrease();reRednder();}}><img src={M_img} width="10px"/></div>
                <div>{c}</div>
                <div onClick={()=>{onIncrease();reRednder();}}><img src={P_img} width="10px"/></div>
            </div>
            {/* */}
        </div>
        
    );
}

export default ModifCount;