import React from 'react';

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

          <div onClick={onDecrease}>-</div>     
          
          <div>{count}</div>
          
          <div onClick={onIncrease}>+</div>
          <br/>

        </div>

      </div>
      
  
    </div>

  );

}

export default Counter;
