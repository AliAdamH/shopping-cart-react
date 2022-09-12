import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { useState } from 'react';

function App() {
  const [lineItems, setLineItems] = useState([]);
  const addLineItem = (item) => {
    setLineItems((previous) => [...previous, item]);
  };

  const addItem = (item) => {
    let duplicateIndex = lineItems.findIndex(
      (lineItem) => lineItem.id === item.id
    );
    duplicateIndex !== -1
      ? updateDuplicate(duplicateIndex, item)
      : addLineItem(item);
  };

  const updateDuplicate = (duplicateIndex, item) => {
    let newItems = [...lineItems];
    newItems[duplicateIndex].quantity += item.quantity;
    setLineItems(newItems);
  };

  const removeLineItem = (id) => {
    let index = lineItems.findIndex((lineItem) => lineItem.id === id);
    let newItems = [...lineItems];
    newItems.splice(index, 1);
    setLineItems(newItems);
  };

  const updateItem = (quantity, id) => {
    let index = lineItems.findIndex((lineItem) => lineItem.id === id);
    let newItems = [...lineItems];
    newItems[index].quantity = quantity;
    setLineItems(newItems);
  };
  return (
    <div className="App">
      <Navbar cartItemsCount={lineItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={lineItems}
              removeLineItem={removeLineItem}
              handleItemQuantity={updateItem}
            />
          }
        />
        <Route path="/products" element={<ProductList addToCart={addItem} />} />
      </Routes>
    </div>
  );
}

export default App;
