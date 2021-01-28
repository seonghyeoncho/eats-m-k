import React, { useState } from 'react';
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
    reRednder: () => void;


}

const BucketView = ({bucket,totalPrice,store, table, reRednder}:Props) => {

    return (

        <>

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
                                            <div className="bucket-item-count">
                                                <div>개수 : {doc.count}개</div>
                                                <div>{numberWithCommas(doc.price)}원</div>

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
                                                <CancleOrderButtonContainer id={doc.id} price={doc.price} bucket={bucket}reRednder={reRednder}/>

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
                                                    reRednder={reRednder}

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
                
            </div>
        </>
    );
}

export default BucketView;