import React, { useState } from 'react';
import {Col, Card} from 'antd';
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
                {
                    table.map((m:any)=>{

                        if(m.check){
                            return(
                                <Col span={8}>
                                    <Card className="orderCard" onClick={()=>onClick(m.orders)}>
                                        <h1>{`${m.myTable}번 테이블`}</h1>
                                        <hr/>
                                        <Order orders={m.orders}/>

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