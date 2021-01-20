import React, { useEffect, useState } from 'react';
import {Button, Menu, Radio} from 'antd';
import queryString from 'query-string';
import {dbService} from '../firebase';
import '../scss/App.scss';
import NewOrderList from './NewOrderList';
import CompleteOrderList from './CompleteOrderList';
import { Table } from '../types';
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const App = () => {
  const query = queryString.parse(window.location.search);

  const [ newOrderList,setNewOrderList ] = useState<any>([]);
  const [ comOrderList, setComOrderList ] = useState<any>([])
  const [ state,setState ] = useState<number>(0);
  const [radio,setRadio]=useState<any>(0);
  const [date, setDate] = useState<any>(new Date());
  const [page, setPage]=useState<number>(1);



  const onChangeRadio= (e:any) => {

    setRadio(e.target.value);

  };

  
  function tick() {
    let now = new Date();
    setDate(now);
  }

  const toggleCheck = (t:string) => {
    
    newOrderList.map((doc:Table)=>{

      if(doc.myTable === t){

        dbService.collection(`${query.store}`).doc(`${t}`).update({state:true})
        
      }
      
    })
                  
  }


  const getOrders = (orderState:string) => {

    dbService.collection(`${query.store}`)
      .orderBy(`${orderState}`)
      .onSnapshot((snapshot:any)=>{
        setComOrderList([]);
        setNewOrderList([]);
        snapshot.docs.map((doc:any)=>{
          if(!doc.data().state && doc.data().orderStatus){
            const tableObj : Table = {

              myTable:doc.id,
              orderList:doc.data().bucket,
              orderStatus:doc.data().orderStatus,
              state:doc.data().state,
              totalPrice:doc.data().totalPrice
              
            }
            setNewOrderList((prev: any) => [tableObj, ...prev]);               
            
          } else {
            const tableObj : Table = {

              myTable:doc.id,
              orderList:doc.data().bucket,
              orderStatus:doc.data().orderStatus,
              state:doc.data().state,
              totalPrice:doc.data().totalPrice
              
            }
            setComOrderList((prev: any) => [tableObj, ...prev]);   

          }

        })

      })
  }

  useEffect(()=>{
    if(radio === 0){

      getOrders('orderAt');

    } else {
      
      getOrders('orderAt_R');
    }

    
    let timerID =setInterval(()=>tick(),1000);
    return function cleanUp(){
      clearInterval(timerID);
    };
    
  },[radio]);


  


  const listState = () => {

    if(state === 0) return <NewOrderList table={newOrderList} toggleCheck={toggleCheck} indexNumber={page}/>
    else return <CompleteOrderList table={comOrderList}/>

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
      <div>
        <Link to={`/setting/?store=${query.store}`}><button>메뉴관리</button></Link>
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
          <h1>{page}/{newOrderList.length/3}</h1>
          <RightCircleOutlined className="circleButton" onClick={()=>{
              if(page<newOrderList.length/3+1){
                  setPage(page+1);
              }
          }}/>
      </div>
      <hr/>

      
    </div>
  );
}

export default App;
