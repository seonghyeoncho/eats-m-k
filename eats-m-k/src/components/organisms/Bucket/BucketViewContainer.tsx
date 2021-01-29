import React, { useEffect, useState } from 'react';
import BucketView from './BucketView';
import numberWithCommas from '../../../functions/addCommaFunc';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import queryString from 'query-string';
import OrderButton from '../../atoms/OrderButton/OrderButton';
import BackButton from '../../atoms/BackButton/BackButton';
import PopUp from '../PopUp';
import { dbService } from '../../../firebase';
import { resetBucket } from '../../../functions/updateBucket';


const BucketViewContainer = (props:any) => {

    const query = queryString.parse(props.location.search);
    const store = query.store;
    const table = query.table;
    const [ bucket, setBucket ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    const [ popUpState, setPopUpState ] = useState<boolean>(false);
    const content = "모든 메뉴를 장바구니에서\n삭제하시겠습니까?";


    const goBack = () => {
        props.history.goBack();
    };

    const popUpTrigger = () => { setPopUpState(!popUpState); };

    
    useEffect(()=>{
        
        dbService.collection(`${store}`).doc(`${table}`).onSnapshot((snapShot:any)=>{
            const data = snapShot.data();
            setBucket(data.bucket);
            setTotalPrice(data.totalPrice);
        })
        
    },[]);


    return (
        <>
            { popUpState ? <PopUp title={'전체 삭제'} content={content} func={()=>resetBucket(store, table)} popUpTrigger={popUpTrigger}/>: null}

            <div className="bucket">
                
                
                <div className="bucket-nav" >
                    <div className="div1"><img src={Arrow} width="12px" onClick={goBack} alt="Arrow"/></div>
                    <div className="div2"> 장바구니</div>
                    <div onClick={popUpTrigger} className="div3">전체 삭제</div>
                </div>
                

                <div className="bucket-con">
                    { 
                        bucket.length !== 0 ? 

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
                    bucket.length !== 0 ? 
                        <OrderButton/>
                    :
                        <BackButton text={'추가하기'}/>
                }

            
                
                
            </div>
        </>
    );
    

}

export default BucketViewContainer;