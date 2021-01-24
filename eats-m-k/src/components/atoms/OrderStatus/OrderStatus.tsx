import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dbService } from '../../../firebase';
import numberWithCommas from '../../../functions/addCommaFunc';
import { RootState } from '../../../modules';
import Bg from '../../../graphics//graphic_OrderBoxBG_x3.png';
import MoreMenuList from '../../organisms/MenuDetail/MoreMenuList';
import Arrow from '../../../icons/icon_arrow_back_black_x3.png'
import Complete from '../../../icons/icon_OrderCompleted_x3.png';
import Reception from '../../../icons/icon_ReceptionCompleted_x3.png';
const OrderStatus = (props:any) => {

    const [totalPrice, setTotalPrice] = useState(0);
    
    const { bucket, state, orderStatus,store, table} = useSelector((state:RootState)=>({

        bucket:state.myBucket.bucket.data?.bucket,
        orderStatus:state.stateSet.orderStatus,
        state:state.stateSet.state,
        store:state.storeSet.store,
        table:state.tableSet.table

        
    }));

    let text:string = '';
    if(state && orderStatus){
        text = '접수완료';

    } else if(!state && orderStatus){

        text = '주문완료';

    }
    const goBack = () => {
        props.history.goBack();
    }
    useEffect(()=>{
        dbService.collection(`${store}`).doc(`${table}`).get().then(
            (doc:any)=>{
                setTotalPrice(doc.data().totalPrice);
            }
        )
        
    },[]);

    console.log(bucket)
    console.log(totalPrice);



    return (
        <div className="orderstatus-con">

            <div className="orderstatus-nav-con">
            <div className="div1"><img src={Arrow} width="12px" onClick={goBack}/></div>
                <div className="orderstatus-nav-text">주문현황</div>
            </div>
            
            {
                !state ? 

                    <div className="orderstatus-state-con">
                        
                        <div className="orderstatus-state-complete"> 

                            <div className="orderstatus-state-complete-circle-1"> 
                                <img src={Complete}/>

                            </div>

                            <div className="orderstatus-state-complete-circle-2">

                            </div>

                            <div className="orderstatus-state-complete-text">
                                주문완료  
                            </div>

                        </div>
                        <div className="orderstatus-state-reception"> 

                            <div className="orderstatus-state-reception-circle-1-1"> 

                            </div>

                            <div className="orderstatus-state-reception-circle-2-1">

                            </div>

                            <div className="orderstatus-state-reception-text-1">
                                접수완료  
                            </div>

                        </div>


                        
                    </div>

                :
                <div className="orderstatus-state-con">
                        
                    <div className="orderstatus-state-complete"> 

                        <div className="orderstatus-state-complete-circle-1"> 
                            <img src={Complete}/>


                        </div>

                        <div className="orderstatus-state-complete-circle-2">
                            

                        </div>

                        <div className="orderstatus-state-complete-text">
                            주문완료  
                        </div>

                    </div>
                    <div className="orderstatus-state-reception"> 

                        <div className="orderstatus-state-reception-circle-1-2"> 
                            <img src={Reception}/>


                        </div>

                        <div className="orderstatus-state-reception-circle-2-2">

                        </div>

                        <div className="orderstatus-state-reception-text-2">
                            접수완료  
                        </div>

                    </div>


                    
                </div>
                    
                

            }
            

            <div className="orderstatus-state-info-con">
                <h1>{store}</h1>
                <h3>테이블 {table}</h3>
                <h3>{numberWithCommas(totalPrice)}원</h3>
            </div>
            

            {
                bucket?.map((doc:any)=>{
                        for(let i in doc){
                            return (
                                <div className="orderstatus-content-con">
                                    {/* <img src={Bg}/> */}

                                    <div className="orderstatus-content">
                                        <div>{doc.menu}</div>
                                        <div>{numberWithCommas(doc.itemTotalPrice)}원</div>
                                    </div>

                                    {
                                        doc.more !== undefined ? 
                                            
                                            <MoreMenuList more={doc.more}/>
                                        :
                                            <div>추가사항 없음</div>
                                    }
                                    

                                    <hr/>
                                </div>
                            );
                        }
                    })
            }
            

        </div>
    );
}

export default OrderStatus;