import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Counter.scss';


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
    <div className="counter-con">
      <div className="counter-content">
        <div>수량</div>
        <div className="counter-bt-con">
          <button onClick={onDecrease}>-1</button>     
          
          <div>{count}</div>
          
          <button onClick={onIncrease}>+1</button><br/>      
        </div>

      </div>
      
      
      {count !== 0 ? <Link to={`/menu/?store=${props.store}&table=${props.table}`}><button onClick={() => {onAddOrder(props.price, props.menu)} }>주문표에 추가</button></Link> : <div>수량을 선택해주세요</div>}
            
    </div>
  );
}

export default Counter;
