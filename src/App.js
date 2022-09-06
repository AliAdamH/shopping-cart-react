import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello from container</h1>
        <Cart />
        <Home />
        <Product />
      </div>
    </div>
  );
}

export default App;
