// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './phonebook/contactForm/ContactForm';
import ContactList from './phonebook/contactList/ContactList';
import Filter from './phonebook/filter/Filter';
import { getContacts } from 'redux/phonebook/selectors';

import styles from './App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  window.localStorage.setItem('contacts', JSON.stringify(contacts));

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
