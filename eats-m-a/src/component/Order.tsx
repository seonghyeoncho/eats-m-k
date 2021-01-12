import React, { useState } from 'react';


const Order = (orders:any):any =>{

    const order:any[] = [];
  
    const filterData = () =>{
  
      for(let i in orders){
        for(let k in orders[i]){
          order.push(orders[i][k]);
        }
      }
  
    }
    
    filterData();
    

    return(
      <div>
        
        {order.map((m:any)=>
          <div className="orderDiv">
            <div key={m.menu}>{m.menu}{m.n} x{m.count}{m.n}   {m.price}{m.n}원</div>

          </div>
        )}
  
      </div>
    );
  
  }

export default Order;