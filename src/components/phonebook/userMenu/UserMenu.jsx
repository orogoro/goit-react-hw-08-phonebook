import { useSelector, useDispatch } from 'react-redux';

import { avatar } from '../../../image/image';
import { authSelector, authOperations } from 'redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelector.getUserName);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} width="40" alt="avatar" />
      <p className={styles.welcome}>
        Welcome,<span className={styles.name}>{name}</span>
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOutUser())}
      >
        Logout
      </button>
    </div>
  );
}
