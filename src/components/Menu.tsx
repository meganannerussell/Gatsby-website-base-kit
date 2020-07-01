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
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
);
