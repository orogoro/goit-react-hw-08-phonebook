import { Link } from 'react-router-dom';

import contactbook_img from '../../image/icon-contact.png';
import contactbook_img2 from '../../image/premium-icon-contacts.png';
import contactbook_img3 from '../../image/premium-icon.png';

import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container_title}>
        <h1>
          Welcome to <span className={styles.span}>Phonebook</span>
        </h1>
        <p className={styles.p}>Next generation</p>
      </div>
      <div className={styles.container_img}>
        <img
          className={styles.img}
          src={contactbook_img}
          alt="bookContacts"
          width="150"
          height="150"
        />
        <img
          className={styles.img}
          src={contactbook_img2}
          alt="bookContacts"
          width="300"
        />
        <img
          className={styles.img}
          src={contactbook_img3}
          alt="bookContacts"
          width="150"
          height="150"
        />
      </div>
      <div className={styles.container_button}>
        <p className={styles.text}>Fast and Secure React Application</p>
        <Link to="/contacts" className={styles.button} type="button">
          Try it now
        </Link>
      </div>
    </main>
  );
}
