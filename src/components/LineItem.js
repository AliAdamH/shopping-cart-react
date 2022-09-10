import React, { useEffect, useState } from 'react';
import styles from './LineItem.module.css';

const LineItem = ({
  id,
  name,
  quantity,
  price,
  handleRemove,
  updateParentQuantity,
}) => {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const [total, setTotal] = useState(quantity * price);

  const handleQuantityChange = (e) => {
    let newQuantity = Number(e.target.value);
    setCurrQuantity(newQuantity);
    updateParentQuantity(newQuantity, id);
  };

  const removeSelf = () => {
    handleRemove(id);
  };
  useEffect(() => {
    setTotal(currQuantity * price);
  }, [currQuantity]);

  return (
    <>
      <div className={styles.lineItem}>
        <div className={styles.lineItem__image}></div>
        <div className={styles.lineItem__infos}>
          <p className={styles.lineItem__infos__text}>
            {/* <span>Product Name</span> */}
            <span className={styles.productName}>{name}</span>
          </p>
          <p className={styles.lineItem__infos__text}>
            <span>Unit price</span>
            <span>${price}</span>
          </p>
        </div>
        <div className={styles.lineItem__actions}>
          <div className={styles.lineItem__actions__quantity}>
            <label htmlFor="line_item_quantity"> 🌹 Quantity</label>
            <input
              type={'number'}
              id="line_item_quantity"
              name="line_item_quantity"
              onChange={handleQuantityChange}
              value={currQuantity}
              className={styles.flowerQuantity}
              min="1"
            />
          </div>
          <p className={styles.lineItem__infos__text}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </p>
        </div>
        <button
          type={'button'}
          onClick={removeSelf}
          className={styles.lineItem__actions__remove}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default LineItem;
