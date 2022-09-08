import React, { useEffect, useState } from 'react';

const LineItem = ({ id, name, quantity, price, handleRemove }) => {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const [total, setTotal] = useState(quantity * price);

  const handleQuantityChange = (e) => {
    setCurrQuantity(Number(e.target.value));
  };

  const removeSelf = () => {
    handleRemove(id);
  };
  useEffect(() => {
    setTotal(currQuantity * price);
  }, [currQuantity]);

  return (
    <>
      <p>Name: {name}</p>
      <p>Unit price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p> {total} </p>
      <input
        type={'number'}
        id="line_item_quantity"
        name="line_item_quantity"
        onChange={handleQuantityChange}
      />
      <button type={'button'} onClick={removeSelf}>
        Remove
      </button>
    </>
  );
};

export default LineItem;
