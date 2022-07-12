import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
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
        Contacts
      </NavLink>
    </div>
  );
}
