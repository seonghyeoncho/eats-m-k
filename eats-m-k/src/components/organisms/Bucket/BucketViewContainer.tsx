import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BucketView from './BucketView';
import { RootState } from '../../../modules';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { resetPrice } from '../../../modules/totalPrice';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import queryString from 'query-string';
import { useCookies } from 'react-cookie';


const BucketViewContainer = (props:any) => {

    const [ cookies, setCookie, removeCookie ] = useCookies(['clientId', 'bucket', 'store', 'table']);

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;

    const [ buckets,setBuckets ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const dispatch = useDispatch();

    console.log(store)

    useEffect(()=>{
        console.log('hello')

        dbService.collection(`${store}`).doc(`${table}`)
            .onSnapshot(snapShot=>{
                console.log(snapShot.data()?.bucket);
                setBuckets(snapShot.data()?.bucket);
                setTotalPrice(snapShot.data()?.totalPrice);
                
        })
        
        
    },[totalPrice]);
    console.log('totalPrice',totalPrice);

    const resetBucket = () => {

        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[],
            'totalPrice':0
        });
        dispatch(resetPrice());
        setCookie('bucket', []);
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
                                <div className="bucket-info-price">{numberWithCommas(totalPrice)}원</div>
                            </div>
                        
                        </div>
                    :
                        <></>
                }
            </div>

            <BucketView bucket={buckets} totalPrice = {totalPrice} store={store} table={table}/>
            
        </div>
    );

}

export default BucketViewContainer;