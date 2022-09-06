import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__logo}>The Florist</p>
      <ul className={styles.navbar__links}>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
