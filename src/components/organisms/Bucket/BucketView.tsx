import React from 'react';
import numberWithCommas from '../../../functions/addCommaFunc';
import CancleOrderButtonContainer from '../../atoms/CancleOrderButton/CancleOrderButtonContainer';
import MoreMenuList from '../MenuDetail/MoreMenuList';
import ModifCount from './ModifCount';
import Cart from '../../../graphics/graphic_cart_x3.png';

interface Props {

    bucket: any
    totalPrice:number
    store:string | string[] | null
    table:string | string[] | null

}

const BucketView = ({bucket,totalPrice,store, table}:Props) => {


    return (
        <div className="bucket-content-con">
           
            
            {
                bucket === null ? 
                    <div className="ready-bucket-con">
                        <img src={Cart}/>

                        <div className="ready-bucket-text">메뉴를 추가해 주세요</div>

                    </div>

                :
                    

                    bucket?.map((doc:any)=>{

                        for(let i in doc){

                            return (

                                <div className="bucket-item-con" key={doc.menu}>
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
                                                store={store}
                                                table={table}
                                                bucket={bucket}

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