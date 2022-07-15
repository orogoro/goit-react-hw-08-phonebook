import { Link } from 'react-router-dom';

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
        <div className={styles.slider}>
          <div className={styles.container}>
            <div className={styles.slide + ' ' + styles.x}></div>
            <div className={styles.slide + ' ' + styles.y}></div>
            <div className={styles.slide + ' ' + styles.z}></div>
          </div>
          <div className={styles.shadow}></div>
        </div>
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

/* <img
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
        /> */
