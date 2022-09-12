import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/shopping-cart.svg';

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__logo}>The Florist</p>
      <ul className={styles.navbar__links}>
        <li style={{ position: 'relative' }}>
          {cartItemsCount > 0 ? (
            <span
              style={{
                position: 'absolute',
                width: '1.125rem',
                height: '1.125rem',
                borderRadius: '50%',
                backgroundColor: 'red',
                right: '-10px',
                top: '-10px',
                fontSize: ' 0.8125rem',
                textAlign: 'center',
                fontWeight: '500',
                color: 'white',
              }}
            >
              {cartItemsCount > 9 ? '9+' : cartItemsCount}
            </span>
          ) : (
            ''
          )}
          <Link to="/cart">
            <Logo style={{ width: '2rem' }} />
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
