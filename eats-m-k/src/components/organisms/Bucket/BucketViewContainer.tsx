import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BucketView from './BucketView';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { resetPrice } from '../../../modules/totalPrice';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'


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
    const goBack = () => {
        props.history.goBack();
    }

    return (

        <div>
            
            <div className="bucket-nav" >
                <div className="div1"><img src={Arrow} width="12px" onClick={goBack}/></div>
                <div className="div2"> 장바구니</div>
                <div onClick={resetBucket} className="div3">전체 삭제</div>
            </div>
            

            <div className="bucket-con">
                { 
                    buckets.length !== 0 ? 

                        <div className="bucket-info-con">

                            <div className="bucket-info">
                                <div className="bucket-info-store">{store}</div>
                                <div className="bucket-info-table">테이블 {table}</div>
                                <div className="bucket-info-price">{numberWithCommas(p)}원</div>
                            </div>
                        
                        </div>
                    :
                        <></>
                }
            </div>

            <BucketView bucket={buckets} totalPrice ={p}/>
            
        </div>
    );

}

export default BucketViewContainer;