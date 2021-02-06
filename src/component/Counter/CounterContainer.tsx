import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { CounterAction } from '../../redux/actions';
import Counter from './Counter';
import './Counter.scss';

const CounterContainer = () => {

  const { count } = useSelector((state:RootState) => ({
    count:state.Counter.count,
  }))
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(CounterAction.increase());
  };
  const onDecrease = () => {
    if(count  !== 1) dispatch(CounterAction.decrease());
  };
  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
  );
};

export default CounterContainer;