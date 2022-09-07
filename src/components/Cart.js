import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="container">
      <h1> This is the shopping cart component</h1>
      <div>
        {items.map((item, index) => {
          return (
            <p key={index}>
              {item.name} | {item.quantity}{' '}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
