import React from 'react';
import { Link } from 'gatsby';
import styles from './menu.module.css';

export default () => (
  <nav>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.menuItem}>
        <Link to="/other-page/">Other page</Link>
      </li>
    </ul>
  </nav>
);
