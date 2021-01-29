import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddMenuButton from './AddMenuButton';
import { resetCount } from '../../../modules/counters';
import { addOrdersFunc, addOrdersProcesser, compareAndMerge} from '../../../functions/compareAndMerge';
import { dbService } from '../../../firebase';

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
};

const AddMenuContainer = ({ select, history, store, table }:Props) => {

    const [bucket, setBucket] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const dispatch = useDispatch();

    const addOrders = () => {

        addOrdersFunc(bucket,select,totalPrice);
        dispatch(resetCount());
        history.goBack();
        
    };

    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setBucket(data.bucket);
            setTotalPrice(data.totalPrice);
        })
    },[]);

    return <AddMenuButton  addOrders={addOrders}/>

}

export default AddMenuContainer;