import React, { useState } from 'react';
import styles from './Product.module.css';

const Product = ({ data, handleAddCart }) => {
  const { id, name, price, image } = data;
  const [quantity, setQuantity] = useState(0);
  const [inCart, setInCart] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const addSelfToCart = () => {
    handleAddCart({ ...data, quantity });
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__image__container}>
          <img
            src={image}
            alt={name}
            className={styles.card__image}
            loading="lazy"
          />
        </div>
        <div className={styles.card__info}>
          <p className={styles.card__info__title}>{name}</p>
          <p className={styles.card__info__price}>${price} per unit</p>
          <small style={{ color: 'darkgreen' }}>
            &#10003; Available for purchase
          </small>
        </div>
        <div className={styles.card__actions}>
          <div className={styles.card__actions__quantity}>
            <label htmlFor={'flower_quantity'}> 🌹 Quantity</label>
            <input
              type={'number'}
              name="flower_quantity"
              id="flower_quantity"
              className={styles.flower_quantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className={styles.card__actions__add_cart}>
            <button type={'button'} onClick={addSelfToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
