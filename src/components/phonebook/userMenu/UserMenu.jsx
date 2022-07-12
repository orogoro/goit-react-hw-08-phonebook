import { avatar } from '../../../image/image';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} width="40" alt="avatar" />
      <p className={styles.welcome}>
        Welcome,<span className={styles.name}> Name</span>
      </p>
      <button className={styles.button} type="button">
        Logout
      </button>
    </div>
  );
}
