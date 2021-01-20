import React, { useEffect, useState } from 'react';
import Order from './Order';
import { Card, Col, Row,Button } from 'antd';
import '../scss/NewOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';

interface Props {
  table:any
  toggleCheck:(t:string)=>void
  indexNumber:number

}

const NewOrderList = ({table,toggleCheck,indexNumber}:Props) => {

  const [select,setSelect] = useState<any>();

  const onClick = (menu:any) => {
    setSelect(menu);
  }

  let tables=[];
  let i=indexNumber*3-3;
  for(i;i<indexNumber*3;i++){
      if(table[i]!=null){

          tables.push(table[i]);
      }
  }

  return (

    <div className="row">
      {
        tables.length !== 0 ? 
          <>
            {
              tables.map((m:any)=>{
                
                for(let i=0; i<indexNumber*3;i++) {
                  return (
                    <Col span={8}>
                      <Card className="orderCard" onClick={() => onClick(m.orders)}>
                        <h1>{`${m.myTable}번 테이블`}</h1>
                        <hr/>
                        <Order orders={m.orderList}/>
                        <div>총 가격 : {numberWithCommas(m.totalPrice)}</div>
                        <Button className="orderFinishedButton" onClick={() => toggleCheck(m.myTable)}>
                          <h1>주문완료</h1>
                        </Button>
                      </Card>
                    </Col>
                  )
                }
                
              })
            }
            
          </>
        : 
          <div>
            <h1>새로운 주문이 없습니다</h1>
          </div>
      }
    


    </div>
  );
}

export default NewOrderList;