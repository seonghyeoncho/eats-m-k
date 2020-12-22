import React, { useEffect, useState } from 'react';

import {dbService} from '../firebase';
import Order from '../component/Order';


const App = () => {

  const [ table,setTable ] =useState<any>([]);
  const [ store,setStore ] = useState<string>("멘동");
  //const [ order, setOrder ] = useState<any>([]);
  

  
 
  
  useEffect(()=>{
    

   dbService.collection(`${store}`).onSnapshot((snapshot:any)=>{
      setTable([]);
      snapshot.docs.map((doc:any)=>{
        //console.log(doc.data().test, doc.id);
        const tableObj = {
          table:doc.id,
          orders:doc.data().test
          
        }
        setTable((prev:any)=>[tableObj, ...prev]);
      });
    })

   

  },[]);

  console.log(table);
  
  
  return (
    <div className="App">
      <div>
        <h1>EATSROAD ADMIN</h1>
        <h1>STORE : {store}</h1>
      </div>

      <div>
        <h1>주문 보드</h1>
        {table.map((m:any)=>
          <>
            <h1 key={m.table}>{m.table}</h1>
            <Order orders={m.orders}/>
            
          </>

        )}

       
      </div>
     
      
    </div>
  );
}

export default App;
