import React, { useState } from 'react';
import { Buckets } from '../../../api/bucketFromFire';
import numberWithCommas from '../../../functions/addCommaFunc';
import BackButton from '../../atoms/BackButton/BackButton';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
import OrderContainer from '../../atoms/Order/OrderContainer';
import MoreMenuListInBucket from '../MenuDetail/MoreMenuListInBucket';
import ModifCount from './ModifCount';

interface Props {

    bucket: any
    totalPrice:number

}
const BucketView = ({bucket,totalPrice}:Props) => {

    return (
        <div>
            
            {
                bucket.length === 0 ? 
                    <>

                        <div>메뉴를 추가해 주세요</div>
                        <BackButton text={'추가하기'}/>

                    </>

                :

                    bucket?.map((doc:any)=>{

                        for(let i in doc){

                            return (

                                <div>

                                    <div>{doc.menu}{numberWithCommas(doc.itemTotalPrice)}원</div>

                                    {/* 개수 수정 컴포넌트 */}
                                    

                                    {
                                        doc.more !== undefined ? 
                                            
                                            <MoreMenuListInBucket more={doc.more}/>
                                        :
                                            <div>추가사항 없음</div>
                                    }
                                    <hr></hr>
                                    <ModifCount 

                                        c={doc.count} 
                                        id={doc.id} 
                                        menu={doc.menu} 
                                        price={doc.price} 
                                        more={doc.more} 
                                        itemTotalPrice={doc.itemTotalPrice}
                                        totalPrice={totalPrice}

                                    />
                                    
                                    <CancleOrderButtonContainer id={doc.id} price={doc.itemTotalPrice} bucket={bucket}/>

                                    <hr/>
                                </div>

                            );

                        }

                    })
                
            }

            <BackButton text={'뒤로가기'}/>
            
            {/* 장바구니 안에서 주문 기능이랑 장바구니 상태에 따른 버튼 표현 구현하기 */}
            
        </div>
    );
}

export default BucketView;