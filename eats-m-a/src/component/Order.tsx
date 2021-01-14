import React, { useState } from 'react';
import {Col} from "antd";


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
                  <h4 key={m.menu}>{m.menu}{m.n} x{m.count}{m.n}</h4>
                  <h4 className="priceText" key={m.price}>{m.price}{m.n}원</h4>

              </div>
        )}
  
      </div>
    );
  
  }

export default Order;