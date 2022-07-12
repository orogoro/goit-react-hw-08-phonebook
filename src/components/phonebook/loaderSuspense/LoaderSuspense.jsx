import HashLoader from 'react-spinners/HashLoader';

import styles from './LoaderSuspense.module.css';

export default function LoaderSuspense() {
  return <HashLoader className={styles.loader} color="black" size={70} />;
}
