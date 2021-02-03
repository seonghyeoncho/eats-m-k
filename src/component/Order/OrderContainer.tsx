import React from 'react';
import Order from './Order';

interface Props {
  text: string;
}

const OrderContainer = ({text}:Props) => {

  const onSubmit = () => {
  };
  return <Order text={text} onSubmit={onSubmit} />

};

export default OrderContainer;