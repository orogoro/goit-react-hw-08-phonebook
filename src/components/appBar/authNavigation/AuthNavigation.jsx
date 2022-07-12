import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

export default function AuthNavigation() {
  return (
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
  );
}
