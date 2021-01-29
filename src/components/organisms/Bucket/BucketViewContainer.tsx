import React, { useEffect, useState } from 'react';
import BucketView from './BucketView';
import numberWithCommas from '../../../functions/addCommaFunc';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import queryString from 'query-string';
import OrderButton from '../../atoms/OrderButton/OrderButton';
import BackButton from '../../atoms/BackButton/BackButton';


const BucketViewContainer = (props:any) => {

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ bucket, setBucket ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);

    const resetBucket = () => {

<<<<<<< HEAD
        window.localStorage.removeItem('totalPrice');
        window.localStorage.removeItem('bucket');
=======
        dbService.collection(`${store}`).doc(`${table}`).update({
            'bucket':[],
            'totalPrice':0
        });
        dispatch(resetPrice());
>>>>>>> v2
        props.history.goBack();

    }

    const goBack = () => {
        props.history.goBack();
    }
    useEffect(()=>{

        setBucket(JSON.parse(window.localStorage.getItem('bucket')!))
        setTotalPrice(Number(window.localStorage.getItem('totalPrice')))

    },[bucket, totalPrice]);

    return (

        <div className="bucket">
            
            <div className="bucket-nav" >
                <div className="div1"><img src={Arrow} width="12px" onClick={goBack}/></div>
                <div className="div2"> 장바구니</div>
                <div onClick={resetBucket} className="div3">전체 삭제</div>
            </div>
            

            <div className="bucket-con">
                { 
                    bucket !== null ? 

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

            <BucketView bucket={bucket} totalPrice = {totalPrice} store={store} table={table}/>
            { 
                bucket !== null ? 
                    <OrderButton/>
                :
                    <BackButton text={'추가하기'}/>
            }
            
            
        </div>
    );

}

export default BucketViewContainer;