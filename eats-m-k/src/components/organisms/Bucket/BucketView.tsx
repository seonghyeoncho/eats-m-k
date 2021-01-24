import React, { useState } from 'react';
import { Buckets } from '../../../api/bucketFromFire';
import numberWithCommas from '../../../functions/addCommaFunc';
import BackButton from '../../atoms/BackButton/BackButton';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
import MoreMenuList from '../MenuDetail/MoreMenuList';
import ModifCount from './ModifCount';

interface Props {

    bucket: any
    totalPrice:number

}
const BucketView = ({bucket,totalPrice}:Props) => {

    return (
        <div className="bucket-content-con">
           
            
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

                                <div className="bucket-item-con">
                                    <div className="bucket-item"> 

                                        <div className="bucket-item-info">
                                            <div>{doc.menu}</div>
                                            <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                        </div>
                                        <div>

                                            {
                                                doc.more !== undefined ? 

                                                    <MoreMenuList more={doc.more}/>
                                                :
                                                    <div>추가사항 없음</div>
                                            }
                                        </div>
                                        <hr />
                                        <div className="modif-bucket">
                                            <CancleOrderButtonContainer id={doc.id} price={doc.itemTotalPrice} bucket={bucket}/>

                                            <ModifCount 

                                                c={doc.count} 
                                                id={doc.id} 
                                                menu={doc.menu} 
                                                price={doc.price} 
                                                more={doc.more} 
                                                itemTotalPrice={doc.itemTotalPrice}
                                                totalPrice={totalPrice}

                                            />
                                        </div>
                                       

                                    </div>
                                    
                                    <div className="middle"/>

                                
                                </div>

                            );

                        }

                    })
                    
                
            }
            <div className="block"></div>

            
            
            {/* 장바구니 안에서 주문 기능이랑 장바구니 상태에 따른 버튼 표현 구현하기 */}
            
        </div>
    );
}

export default BucketView;