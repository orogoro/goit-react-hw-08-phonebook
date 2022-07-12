import Navigation from './navigation/Navigation';
import AuthNavigation from './authNavigation/AuthNavigation';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <nav className={styles.nav}>
      <Navigation />
      <AuthNavigation />
    </nav>
  );
}
