import React, { useState } from 'react';
import Order from './Order';


interface Props {

    table:any
    toggleCheck:(t:number)=>void

}
const NewOrderList = ({table,toggleCheck}:Props) => {

  const [select,setSelect] = useState<any>();

    const onClick = (menu:any) => {
        setSelect(menu);
    }

  let c = 0;
  
  return (

    <div>
      
      {table.map((m:any)=>{
          
        if(!m.check){
          return(
            <div className="or-con" onClick={()=>onClick(m.orders)}>
              <div key={m.myTable}>{m.myTable}</div>
              <Order orders={m.orders}/>
              <button onClick={()=>toggleCheck(m.myTable)}>주문완료</button>
            </div>
          )
        }
            

      })}

      <div>상세주문</div>
      <Order orders={select}/>

    </div>
  );
}

export default NewOrderList;