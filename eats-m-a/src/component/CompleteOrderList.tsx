import React, { useState } from 'react';
import {Col, Card} from 'antd';
import Order from './Order';
import '../scss/CompleteOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';
import { createTempVariable } from 'typescript';


interface Props {
    table:any
}

const CompleteOrderList = ({table}:Props) => {

    const [select,setSelect] = useState<any>();

    const onClick = (menu:any) => {
        setSelect(menu);
    }


    return (
        <>
            <div className="row" >
                {
                    table.map((m:any)=>{

                        if(m.state){
                            return(
                                <Col span={8}>
                                    <Card className="orderCard" onClick={()=>onClick(m.orderList)}>
                                        <h1>{`${m.myTable}번 테이블`}</h1>
                                        <hr/>
                                        <Order orders={m.orderList}/>
                                        <h1>{numberWithCommas(m.totalPrice)}원</h1>

                                    </Card>
                                </Col>
                            )
                        }


                    })
                }
            </div>

        </>
    );
}

export default CompleteOrderList;