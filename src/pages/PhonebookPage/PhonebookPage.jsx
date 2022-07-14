import {
  ContactForm,
  ContactList,
  Filter,
} from '../../components/phonebook/index';

import styles from './PhonebookPage.module.css';

export default function PhonebookPage() {
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
