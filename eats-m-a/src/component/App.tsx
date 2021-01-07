import React, { useEffect, useState } from 'react';

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
 
  return (
    <div className="App">
      <div>
        <h1>EATSROAD ADMIN</h1>
        <h1>STORE : {query.store}</h1>
      </div>

      <hr/>

      <div>
        <Router>
          <Link to={`/neworder/?store=${query.store}`}><h1>주문 보드</h1></Link>
          <Link to={`/orderlist/?store=${query.store}`}><h1>주문완료보드</h1></Link>
          <Switch>
            <Route exact path ="/neworder" component={()=><NewOrderList table={table} toggleCheck={toggleCheck}/>}/>
            <Route exact path ="/orderlist" component={()=><CompleteOrderList table={table}/>}/>
          </Switch>
        </Router>
        
        
       
      </div>
      <hr/>
     
      
    </div>
  );
}

export default App;
