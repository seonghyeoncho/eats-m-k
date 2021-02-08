import React from 'react';
import { useDispatch } from 'react-redux';
import { OrderAction } from '../../redux/actions';
import Order from './Order';

interface Props {
  text: string;
}

const OrderContainer = ({text}:Props) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(OrderAction.addOrder());
  };
  return <Order text={text} onSubmit={onSubmit} />

};

export default OrderContainer;