import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__logo}>The Florist</p>
      <ul className={styles.navbar__links}>
        <li>
          <a href="#">This is a link</a>
        </li>
        <li>Hello from the Navbar component</li>
      </ul>
    </nav>
  );
};

export default Navbar;
