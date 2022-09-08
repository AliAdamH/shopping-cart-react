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
      <h1
        style={{ padding: '1rem', marginBottom: '1rem', textAlign: 'center' }}
      >
        Your shopping cart
      </h1>
      <div style={{ paddingBlock: '1rem' }}>
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
      <div
        style={{
          borderTop: '3px dashed #fecd60',
          padding: '1rem',
          textAlign: 'end',
        }}
      >
        Total : {totalAmount} Dolla Dolla's
      </div>
    </div>
  );
};

export default Cart;
