import React, { useEffect, useState } from 'react';
import {Menu, Radio} from 'antd';
import queryString from 'query-string';
import {dbService} from '../firebase';
import Order from '../component/Order';
import '../scss/App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NewOrderList from './NewOrderList';
import CompleteOrderList from './CompleteOrderList';
import { Table } from '../types';
/*

  추가 메뉴는 more에 담김,
  없을 수도 있음

  toString 오류는 99%로 null이라서 생김 ㅋㅋ

*/


const App = () => {
  const query = queryString.parse(window.location.search);

  const [ table,setTable ] = useState<any>([]);
  const [ state,setState ] = useState<number>(0);
  const [ radio,setRadio ] = useState<any>(1);

  const onChangeRadio= (e:any) => {
      console.log('radio checked', e.target.value);
      setRadio(e.target.value);
  };
  // const tableDummy=[
  //   {
  //     check: false,
  //     myTable: "6",
  //     orders: [{
  //         count:1,
  //         menu:"가츠동",
  //         price:5800
  //     }]
  //   },
  //   {
  //     check: false,
  //     myTable: "3",
  //     orders: [
  //       {
  //         count:4,
  //         menu:"가츠동",
  //         price:6500
  //       },
  //       {
  //         count:4,
  //         menu:"가츠동",
  //         price:6500
  //       }
  //     ]
  //   }
  // ];

  
  // console.log('더미데이터');
  // console.log(tableDummy);
  // console.log("data");
  //console.log(table);

  useEffect(()=>{

    getOrders();

  },[]);

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

          setTable((prev:any)=>[tableObj, ...prev]);

        }
      );
    })

  }

  

  console.log(table);
  const listState = () => {

      if(state === 0) return <NewOrderList table={table} toggleCheck={toggleCheck}/>
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

        <button className={`newOrderButton ${!state && "buttonClicked"}`} onClick={()=>setState(0)}>새로운주문</button>
        <button className={`completeOrderButton ${state && "buttonClicked"}`} onClick={()=>setState(1)}>접수완료</button>
      </div>

      <div className="radioDiv">
          <Radio.Group onChange={onChangeRadio} value={radio}>
              <Radio value={1}>과거 주문순</Radio>
              <Radio value={2}>최신 주문순</Radio>
          </Radio.Group>
          <hr/>
      </div>


      <div>
          {listState()}
      </div>
      <hr/>
     
      
    </div>
  );
}

export default App;
