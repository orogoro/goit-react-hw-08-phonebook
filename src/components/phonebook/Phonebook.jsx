import { ContactForm, ContactList, Filter } from './index';

import styles from './Phonebook.module.css';

export default function Phonebook() {
  return (
    <div className="container">
      <section className={styles.phonebook}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.contact_title}>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
