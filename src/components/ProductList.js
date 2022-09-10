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
        name: 'Hibiscus Rosa Sinensis',
        price: 9.99,
      },
      {
        id: 2,
        name: 'Iris Sibrica',
        price: 19.99,
      },
      {
        id: 3,
        name: 'Rosa Rubiginosa',
        price: 5.99,
      },
    ]);
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
