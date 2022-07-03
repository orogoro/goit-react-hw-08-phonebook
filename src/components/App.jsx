import ContactForm from './phonebook/contactForm/ContactForm';
import ContactList from './phonebook/contactList/ContactList';
import Filter from './phonebook/filter/Filter';

import styles from './App.module.css';

export default function App() {
  return (
    <div className="container">
      <section className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
