import React, { useState } from 'react';
import {Col} from "antd";
import '../scss/Order.scss';

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
            <>
              <div className="orderDiv">
                  <div className="orderInfo">
                      <h2 className="menuText" key={m.menu}><b>{m.menu}{m.n}</b></h2>
                      <h2 className="countText" key={m.count}><b>{m.count}{m.n}개</b></h2>
                  </div>
              </div>
            <hr/>
            </>
        )}
  
      </div>
    );
  
  }

export default Order;