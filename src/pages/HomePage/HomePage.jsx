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
    </main>
  );
}
