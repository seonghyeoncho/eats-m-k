import React, { useState } from 'react';
import {Col} from "antd";
import '../scss/Order.scss';
import numberWithCommas from '../functions/addCommaFunc';
import { disconnect } from 'process';

interface Props {
  orders:any
}

const Order = ({orders}:Props) =>{

    console.log(orders)
  
    return(
      <div>
        
        {orders.map((m:any)=>
            <>
              <div className="orderDiv">
                  <div className="tatalInfo">
                      <div className="orderInfo">
                          <h2 className="menuText" key={m.menu}><b>{m.menu}</b></h2>
                          <h2 className="countText" key={m.count}><b>{m.count}개</b></h2>
                      </div>
                      <div className="orderDetail">
                      {
                        m.more !== undefined ? 
                          <>
                            {
                              m.more.map((doc:any)=>{
                                
                                  return <h4>| {doc} </h4>
                                
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