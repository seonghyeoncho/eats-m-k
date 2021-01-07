import React from 'react';
import Order from './Order';


interface Props {

    table:any
    toggleCheck:(t:number)=>void

}
const NewOrderList = ({table,toggleCheck}:Props) => {

  let c = 0;
  
  return (

    <div>
      {table.map((m:any)=>{
          
        if(!m.check){
          return(
            <div className="or-con">
              <div key={m.myTable}>{m.myTable}</div>
              <Order orders={m.orders}/>
              <button onClick={()=>toggleCheck(m.myTable)}>주문완료</button>
            </div>
          )
        }
            

      })}

    </div>
  );
}

export default NewOrderList;