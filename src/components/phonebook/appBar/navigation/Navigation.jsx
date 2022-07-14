import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { authSelector } from 'redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
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
      {isLoggedIn && (
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
      )}
    </div>
  );
}
