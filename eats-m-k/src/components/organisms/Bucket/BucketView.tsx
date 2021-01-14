import React, { useState } from 'react';
import { Buckets } from '../../../api/bucketFromFire';
import numberWithCommas from '../../../functions/addCommaFunc';
import BackButton from '../../atoms/BackButton/BackButton';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
import OrderContainer from '../../atoms/Order/OrderContainer';
import MoreMenuListInBucket from '../MenuDetail/MoreMenuListInBucket';


interface Props {
    bucket: any
    handleClick: () => void

    
}
const BucketView = ({bucket}:Props) => {
    const [set,forceUpdate] = useState(1);
    console.log(bucket);

    function handleClick() {
        forceUpdate(0);
        console.log('111')
      }
    

    return (
        <div>
            
            
            {
                bucket.length === 0 ? 
                    <div>메뉴를 추가해 주세요</div>
                :
                    bucket?.map((doc:any)=>{
                        for(let i in doc){
                            return (
                                <div>
                                    <div>{doc.menu}{numberWithCommas(doc.price)}원</div>
                                    {
                                        doc.more !== undefined ? 
                                            
                                            <MoreMenuListInBucket more={doc.more}/>
                                        :
                                            <div>추가사항 없음</div>
                                    }
                                    
                                    <div onClick={handleClick}><CancleOrderButtonContainer id={doc.id} price={doc.price * doc.count}/></div>

                                    <hr/>
                                </div>
                            );
                        }
                    })
                

                
            }
            
            <OrderContainer text={"더담기"}/>
            
            
        </div>
    );
}

export default BucketView;