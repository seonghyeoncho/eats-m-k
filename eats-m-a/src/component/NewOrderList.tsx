import React, { useState } from 'react';
import Order from './Order';
import { Card, Col, Row,Button } from 'antd';
import '../scss/NewOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';
import { Table } from '../types';

interface Props {

    table:any
    toggleCheck:(t:string)=>void

}
const NewOrderList = ({table,toggleCheck}:Props) => {

  const [select,setSelect] = useState<any>();

  const onClick = (menu:any) => {
    setSelect(menu);
  }

  let c = 0;
  
  
  return (

    <div>
      {table.map((m:Table)=>{
          
        if(m.orderStatus && !m.state && m.totalPrice !== 0){
          return(
              <Col span={8}>
                  <Card className="orderCard" onClick={()=>onClick(m.orderList)} >
                      <h1>{`${m.myTable}번 테이블`}</h1>
                      <hr/>
                    <Card className="orderMeta">
                        <Order orders={m.orderList}/>
                        <h1>{numberWithCommas(m.totalPrice)}원</h1>
                    </Card>
                    
                    <Button className="orderFinishedButton" onClick={()=>toggleCheck(m.myTable)}>주문접수</Button>
                  </Card>
              </Col>
          )
        }
            

      })}


    </div>
  );
}

export default NewOrderList;