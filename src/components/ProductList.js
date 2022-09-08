import React, { useState, useEffect } from 'react';
import Product from './Product';
const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const sendToCart = (product) => {
    props.addToCart(product);
    console.log(product);
  };
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: 'Hello there',
        price: 9.99,
      },
    ]);
  }, []);

  return (
    <div className="container">
      {products.map((object, index) => {
        return <Product key={index} data={object} handleAddCart={sendToCart} />;
      })}
    </div>
  );
};

export default ProductList;
