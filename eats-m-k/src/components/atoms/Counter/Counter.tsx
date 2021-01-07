import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderContainer from '../AddMenuButton/AddMenuButtonContainer';
import '../../../scss/Counter.scss';

type Props = {
  count:number
  onIncrease:()=>void
  onDecrease:()=>void
}

const Counter = ({count,onIncrease,onDecrease}:Props) => {
    
  

  return(

    <div className="counter-con">

      <div className="counter-content">

        <div>수량</div>

        <div className="counter-bt-con">

          <button onClick={onDecrease}>-1</button>     
          
          <div>{count}</div>
          
          <button onClick={onIncrease}>+1</button><br/>

        </div>

      </div>
      
  
    </div>

  );

}

export default Counter;
