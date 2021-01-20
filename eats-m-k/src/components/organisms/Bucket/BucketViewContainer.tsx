import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BucketView from './BucketView';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { resetPrice } from '../../../modules/totalPrice';
import OrderButton from '../../atoms/OrderButton/OrderButton';

const BucketViewContainer = (props:any) => {


    const { store, table,p } = useSelector((state:RootState)=>({

        store:state.storeSet.store,
        table:state.tableSet.table,
        p:state.totalPrice.price,
    
    }))
    const [ buckets,setBuckets ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(p);

    const dispatch = useDispatch();

    useEffect(()=>{

        dbService.collection(`${store}`).doc(`${table}`)
            .onSnapshot(snapShot=>{
                console.log(snapShot.data()?.bucket);
                setBuckets(snapShot.data()?.bucket);
                setTotalPrice(snapShot.data()?.totalPrice);
        })
        
    },[]);
    console.log('totalPrice',totalPrice);

    const resetBucket = () => {

        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[],
            'totalPrice':0
        });
        dispatch(resetPrice());
        
        props.history.goBack();

    }

    return (
        <div>
            
            { 
                buckets.length !== 0 ? 
                    <div>
                        <div>{store}</div>
                        <div>테이블 {table}</div>
                        <div>{numberWithCommas(p)}</div>
                        <button onClick={resetBucket}>전체 삭제</button>
                    </div>
                :
                    <></>
            }

            <BucketView bucket={buckets} totalPrice ={p}/>
            <OrderButton/>
        </div>
    );

}

export default BucketViewContainer;