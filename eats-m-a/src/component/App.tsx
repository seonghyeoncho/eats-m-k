import React, { useEffect, useState } from 'react';
import {Button, Menu, Radio} from 'antd';
import queryString from 'query-string';
import {dbService} from '../firebase';
import Order from '../component/Order';
import '../scss/App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NewOrderList from './NewOrderList';
import CompleteOrderList from './CompleteOrderList';
import { Table } from '../types';

import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";

  // 추가 메뉴는 more에 담김,
  // 없을 수도 있음

  // toString 오류는 99%로 null이라서 생김 ㅋㅋ




const App = () => {
  const query = queryString.parse(window.location.search);

  const [ table,setTable ] = useState<any>([]);
  const [ state,setState ] = useState<number>(0);
  const [radio,setRadio]=useState<any>(0);
  const [date, setDate] = useState<any>(new Date());
  const [page, setPage]=useState<number>(1);



  const onChangeRadio= (e:any) => {
      console.log('radio checked', e.target.value);
      setRadio(e.target.value);
  };

  
  function tick() {
    let now = new Date();
    setDate(now);
  }

  const toggleCheck = (t:string) => {
    
    table.map((doc:Table)=>{

      if(doc.myTable === t){

        dbService.collection(`${query.store}`).doc(`${t}`).update({state:true})
        
      }
      
    })
                  
  }


  const getOrders = () => {

    dbService.collection(`${query.store}`)
      .orderBy("orderAt")
      .onSnapshot((snapshot:any)=>{
        setTable([]);
        snapshot.docs.map((doc:any)=>{
          

          const tableObj : Table = {
            
            myTable:doc.id,
            orderList:doc.data().bucket,
            orderStatus:doc.data().orderStatus,
            state:doc.data().state,
            totalPrice:doc.data().totalPrice
            
          }

          setTable((prev: any) => [tableObj, ...prev]);               

        })

      })
  }

  useEffect(()=>{
    
    getOrders();
    let timerID =setInterval(()=>tick(),1000);
    return function cleanUp(){
      clearInterval(timerID);
    };
    
  },[]);


  

  console.log(table);
  const listState = () => {

      if(state === 0) return <NewOrderList table={table} toggleCheck={toggleCheck} indexNumber={page}/>
      else return <CompleteOrderList table={table}/>
  }
 
  return (
    <div className="App">
      <div>
          <Menu className="Menu" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                  <h1>{query.store}</h1>
              </Menu.Item>
          </Menu>
      </div>

      <div className="orderButtonClass">

        <button className={`newOrderButton ${!state && "buttonClicked"}`} onClick={()=>{
            setState(0);
            setPage(1);
        }}>새로운주문</button>
        <button className={`completeOrderButton ${state && "buttonClicked"}`} onClick={()=>setState(1)}>접수완료</button>
      </div>
      <div className="infoBar">
          <div className="radioDiv">
              <Radio.Group onChange={onChangeRadio} value={radio}>
                  <Radio value={0}>최신 주문순</Radio>
                  <Radio value={1}>과거 주문순</Radio>
              </Radio.Group>
          </div>
          <div className="timer">
              <h1>{date.toLocaleString('kr')}</h1>
          </div>

      </div>
      <hr className="infoHr"/>

      <div>
          {listState()}
      </div>
      <div className="pageButton">
          <LeftCircleOutlined className="circleButton" onClick={()=>{
              if(page>1){
                  setPage(page-1);
              }
          }}/>
          <h1>{page}/{table.length/3}</h1>
          <RightCircleOutlined className="circleButton" onClick={()=>{
              if(page<table.length/3+1){
                  setPage(page+1);
              }
          }}/>
      </div>
      <hr/>

      
    </div>
  );
}

export default App;
