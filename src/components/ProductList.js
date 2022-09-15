import React, { useState, useEffect } from 'react';
import Product from './Product';
import { Flowers } from './FlowerData';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const sendToCart = (product) => {
    props.addToCart(product);
    console.log(product);
  };
  useEffect(() => {
    setProducts([...Flowers]);
  }, []);

  return (
    <div
      className="container"
      style={{
        padding: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        justifyContent: 'center',
      }}
    >
      {products.map((object, index) => {
        return <Product key={index} data={object} handleAddCart={sendToCart} />;
      })}
    </div>
  );
};

export default ProductList;
