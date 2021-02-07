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
    <div className="counter">
      <div className="content">
        <div className="title">
          수량
        </div>
        <div className="bt">
          <img onClick={onDecrease} className={`de ${ count === 1 ? 'deni':''}`} src={M_img} alt="de" />   
          <div className="text">{count}</div>
          <img onClick={onIncrease} className="in-img" src={P_img} alt="in"/>
        </div>
      </div>
    </div>
  );
};

export default Counter;