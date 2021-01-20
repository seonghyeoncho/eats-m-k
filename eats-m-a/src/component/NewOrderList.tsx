import React, { useEffect, useState } from 'react';
import Order from './Order';
import { Card, Col, Row,Button } from 'antd';
import '../scss/NewOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';
import { Table } from '../types';
import { dbService } from '../firebase';

interface Props {
  table:any
  toggleCheck:(t:string)=>void
  indexNumber:number
  store:string | string[] | null
}

const NewOrderList = ({table,toggleCheck,indexNumber,store}:Props) => {

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



  useEffect(()=>{
    const data = dbService.collection(`${store}`).where('state','==','false').get();
    console.log(data);
  },[])


  return (

    <div className="row">
      {
        tables.length !== 0 ? 
          <>
            {
              tables.map((m:any)=>{
                if(m.orderStatus && m.totalPrice !== 0){
                    for(let i=0; i<indexNumber*3;i++) {
                        return (
                            <Col span={8}>
                                <Card className="orderCard" onClick={() => onClick(m.orders)}>
                                    <h1>{`${m.myTable}번 테이블`}</h1>
                                    <hr/>
                                    <Order orders={m.orderList}/>
                                    <Button className="orderFinishedButton" onClick={() => toggleCheck(m.myTable)}><h1>주문완료</h1>
                                    </Button>
                                </Card>
                            </Col>
                        )
                    }
                }
              }
              )
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