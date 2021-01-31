import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dbService } from '../../firebase/firebase';
import { addOrdersFunc } from '../../functions/compareAndMerge';

interface Props {
    select: {
        menu:string,
        price:number,
        more: any,
        count:number,
        itemTotalPrice: number
    };
    store:string | string[] | null
    table:string | string[] | null
}

const OrderButtonDirect = ({select, store, table}:Props) => {

    const [bucket, setBucket] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const orderStatus = JSON.parse(window.localStorage.getItem('orderStatus')!);
    
    const onClick = () => {
        addOrdersFunc(bucket, select, totalPrice);
    };
    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).get().then((doc:any)=>{
            const data = doc.data();
            setBucket(data.bucket);
            setTotalPrice(data.totalPrice);
        });
    },[]);

    return(
        <div>
            <div onClick={onClick}>
                <Link to={`/orderlistd/?store=${store}&table=${table}`}>
                    <div className={`bt ${orderStatus?'add':''}`}>{orderStatus? '추가 주문하기':'주문하기'}</div>
                </Link>
            </div>
        </div>
    );
}

export default OrderButtonDirect;