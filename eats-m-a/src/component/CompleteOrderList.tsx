import React, { useState } from 'react';
import {Row, Col, Card, Button} from 'antd';
import Order from './Order';
import '../scss/CompleteOrderList.scss';


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
                {table.map((m:any)=>{

                    if(m.check){
                        return(
                            <Col span={8}>
                                <Card className="orderCard" onClick={()=>onClick(m.orders)} title={`${m.myTable}번 테이블`}>
                                    <Card className="orderMeta">
                                        <Order orders={m.orders}/>
                                    </Card>
                                </Card>
                            </Col>
                        )
                    }


                })}
            </div>

            <div>

                <div>상세주문</div>
                <Order orders={select}/>


            </div>
        </>
    );
}

export default CompleteOrderList;