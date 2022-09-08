import React, { useEffect, useState } from 'react';
import LineItem from './LineItem';

const Cart = ({ items, removeLineItem }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const removeItem = (id) => {
    removeLineItem(id);
  };

  useEffect(() => {
    setTotalAmount(getTotalAmount());
  }, []);

  useEffect(() => {
    setTotalAmount(getTotalAmount());
  }, [items]);

  const getTotalAmount = () => {
    return items
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div className="container">
      <h1> This is the shopping cart component</h1>
      <div>
        {items.map((item, index) => {
          return (
            <LineItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              handleRemove={removeItem}
            />
          );
        })}
      </div>
      <div>{totalAmount} Dolla Dolla's</div>
    </div>
  );
};

export default Cart;
