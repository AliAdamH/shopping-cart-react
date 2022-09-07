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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart items={lineItems} />} />
        <Route path="/products" element={<ProductList addToCart={addItem} />} />
      </Routes>
    </div>
  );
}

export default App;
