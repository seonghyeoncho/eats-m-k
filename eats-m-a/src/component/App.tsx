import React, { useEffect, useState } from 'react';
import {Menu, Button,Radio} from 'antd';
import queryString from 'query-string';
import {dbService} from '../firebase';
import Order from '../component/Order';
import '../scss/App.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NewOrderList from './NewOrderList';
import CompleteOrderList from './CompleteOrderList';



const App = () => {
  const query = queryString.parse(window.location.search);

  const [ table,setTable ] = useState<any>([]);
  const [ state,setState ] = useState<number>(0);
  const [radio,setRadio]=useState<any>(1);

  const onChangeRadio= (e:any) => {
      console.log('radio checked', e.target.value);
      setRadio(e.target.value);
  };


  useEffect(()=>{

    dbService.collection(`${query.store}`)
      .orderBy("orderAt")
      .onSnapshot((snapshot:any)=>{
        setTable([]);
        snapshot.docs.map((doc:any)=>{
          console.log(doc.data().orderList);

          const tableObj = {
            
            myTable:doc.id,
            orders:doc.data().orderList,
            check:doc.data().check
          }

          setTable((prev:any)=>[tableObj, ...prev]);

        }
      );
    })

  },[]);

  const toggleCheck = (t:number) => {
    
    table.map((doc:any)=>{

      if(doc.myTable === t){

        dbService.collection(`${query.store}`).doc(`${t}`).update({check:true})
        
      }
      
    })
                  
  }

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

        <Button className="newOrderButton" onClick={()=>setState(0)}>새로운주문</Button>
        <Button className="completeOrderButton" onClick={()=>setState(1)}>접수완료</Button>
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
