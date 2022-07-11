import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Contact
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
        >
          Log in
        </NavLink>
      </div>
    </nav>
  );
}
