import React, { useState } from 'react';
import {Col} from "antd";
import '../scss/Order.scss';
import numberWithCommas from '../functions/addCommaFunc';

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
                  <div className="tatalInfo">
                      <div className="orderInfo">
                          <h2 className="menuText" key={m.menu}><b>{m.menu}</b></h2>
                          <h2 className="countText" key={m.count}><b>{m.count}개</b></h2>
                      </div>
                      <div className="orderDetail">
                      {
                        m.more.length !== 0 ? 
                          <>
                            {
                              m.more.map((doc:any)=>{
                                for(let i in doc){
                                  return <h4>|{i}</h4>
                                }
                              })
                            }
                          </>
                        :
                          <></>
                      }
                      </div>
                      
                  </div>
              </div>
            <hr/>
            </>
        )}
  
      </div>
    );
  
  }

export default Order;