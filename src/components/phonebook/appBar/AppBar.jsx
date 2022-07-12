import { useSelector } from 'react-redux';
import Navigation from './navigation/Navigation';
import AuthNavigation from './authNavigation/AuthNavigation';
import UserMenu from '../userMenu/UserMenu';

import { authSelector } from 'redux/auth';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelector.detIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </nav>
  );
}
