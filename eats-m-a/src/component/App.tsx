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
  const [ state,setState ] = useState<number>(0);
  
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
        <h1>EATSROAD ADMIN</h1>
        <h1>STORE : {query.store}</h1>
      </div>

      <hr/>

      <div>

        <button onClick={()=>setState(0)}>새로운주문</button>
        <button onClick={()=>setState(1)}>접수완료</button>
        {listState()}
        
        
       
      </div>
      <hr/>
     
      
    </div>
  );
}

export default App;
