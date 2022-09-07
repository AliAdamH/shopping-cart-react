import React, { useState, useEffect } from 'react';
import Product from './Product';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: 'Hello there',
      },
    ]);
  }, []);

  return (
    <div className="container">
      {products.map((object, index) => {
        return <Product key={index} name={object.name} />;
      })}
    </div>
  );
};

export default ProductList;
