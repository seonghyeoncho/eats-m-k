import React, { useState } from 'react';

const Counter = (props:any):any => {
    

    const [count, setCount] = useState<number>(0);

    const onAddOrder = ( p : number, m : string) => {
      
      if(count !== 0){
        const sumPrice = props.currentPrice+(count)*(p);
  
        const testObj = {
          menu:m,
          n:count
        }
        props.setTest((prev:any)=>[testObj,...prev]);
        
        props.setTotalPrice(sumPrice);
        setCount(0);
      }
       
    }
  

    const onIncrease = () => {
      setCount((prevCount:number) => prevCount + 1);
    };

    const onDecrease = () => {
        if(count === 0){
            
        } else {
            setCount((prevCount:number) => prevCount - 1);
  
        }
  
    };
    return(
        <div>
            
            <button onClick={onDecrease}>-1</button>
            <div>{count}</div>
            <button onClick={onIncrease}>+1</button><br/>
            <button onClick={() => {onAddOrder(props.price, props.name)} }>주문표에 추가</button>
            
        </div>
    );
}

export default Counter;
