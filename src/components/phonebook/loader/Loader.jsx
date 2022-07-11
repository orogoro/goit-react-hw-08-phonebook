import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

import styles from './Loader.module.css';

export default function Loader({ loading }) {
  return (
    <ClipLoader
      className={styles.loader}
      color="black"
      loading={loading}
      size={10}
    />
  );
}

Loader.propTypes = {
  loader: PropTypes.bool,
};
