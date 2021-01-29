import React, { useEffect, useState } from 'react';
import Order from './Order';
import { Card, Col,  Popover,Button } from 'antd';
import '../scss/NewOrderList.scss';
import numberWithCommas from '../functions/addCommaFunc';
import {dbService} from "../firebase";
import queryString from "query-string";

interface Props {
  table:any
  toggleCheck:(t:string)=>void
  indexNumber:number

}

const NewOrderList = ({table,toggleCheck,indexNumber}:Props) => {
  const query = queryString.parse(window.location.search);

  const [popoverVisible,setPopoverVisible]=useState<any>({tableNum:0,visible:false});

  let tables:any=[];
  let i=indexNumber*3-3;
  for(i;i<indexNumber*3;i++){
      if(table[i]!=null){
          tables.push(table[i]);
      }
  }

  console.log(tables);



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
                      <Card className="orderCard" >
                        <h1 key={m.myTable}>{m.myTable}번 테이블</h1>
                        <hr/>
                          {
                              (m.orderlist<6)?
                                  <>
                                      <Order orders={m.orderList}/>
                                      <div className='totalPriceDiv'><hr className='coloredHr'/><h3>총 가격 : {numberWithCommas(m.totalPrice)}</h3></div>
                                      <div>
                                          <Button className="orderCancelButton" onClick={() => {
                                              dbService.collection(`${query.store}`).doc(`${m.myTable}`).update({
                                                bucket:[],
                                                totalPrice:0,
                                                orderStatus:false
                                              })

                                          }}>
                                            <h1>주문거부</h1>
                                          </Button>
                                          <Button className="orderFinishedButton" onClick={() => toggleCheck(m.myTable)}>
                                            <h1>주문완료</h1>
                                          </Button>
                                      </div>
                                  </>:
                                  <>
                                      {
                                          <>
                                              <Order orders={m.orderList.slice(0,4)}/>
                                              <h1>
                                                 상위 4개의 메뉴만 출력됩니다. 주문상세보기를 눌러 전체 메뉴를 확인해 주세요
                                              </h1>
                                              <div className='totalPriceDiv'><hr className='coloredHr'/><h3>총 가격 : {numberWithCommas(m.totalPrice)}</h3></div>

                                              <div className='menuPopover'>
                                                <Order orders={m.orderList}/>
                                                <div className='totalPriceDiv'><hr className='coloredHr'/><h3>총 가격 : {numberWithCommas(m.totalPrice)}</h3></div>
                                                <Button className="orderCancelButton" onClick={() => {
                                                  dbService.collection(`${query.store}`).doc(`${m.myTable}`).update({
                                                    bucket:[],
                                                    totalPrice:0,
                                                    orderStatus:false
                                                  })

                                                }}>
                                                  <h1>주문거부</h1>
                                                </Button>
                                                <Button className="orderFinishedButton" onClick={() => {
                                                  toggleCheck(m.myTable);
                                                }}>
                                                    <h1>주문 접수</h1>
                                                </Button>

                                              </div>
                                                  
                                          </>
                                      }


                                  </>
                          }





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