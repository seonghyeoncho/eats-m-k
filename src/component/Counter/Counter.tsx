import React from 'react';
import P_img from '../../image/icons/icon_plus_x3.png';
import M_img from '../../image/icons/icon_minus_x3.png';

type Props = {
  count:number
  onIncrease: () => void
  onDecrease: () => void
};

const Counter = ({count,onIncrease,onDecrease}:Props) => {
  return(
    <div className="counter-con">
      <div className="counter-content">
        <div className="counter-content-text">수량</div>
        <div className="counter-bt-con">
          <img onClick={onDecrease} src={M_img} alt="de"/>   
          <div className="counter-bt-text">{count}</div>
          <img onClick={onIncrease} src={P_img} alt="in"/>
        </div>
      </div>
    </div>
  );
};

export default Counter;
