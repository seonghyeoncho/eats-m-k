import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/modules';
import { increase, decrease} from '../../redux/modules/counters';
import Counter from './Counter';
import './Counter.scss';

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counters.count);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    if(count  !== 1) dispatch(decrease());
  };
  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;