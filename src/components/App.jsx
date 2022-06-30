import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './phonebook/contactForm/ContactForm';
import ContactList from './phonebook/contactList/ContactList';
import Filter from './phonebook/filter/Filter';

import styles from './App.module.css';

import { options } from './config/data';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? options
  );
  const [filter, setFilter] = useState('');

  // const addContact = ({ name, number }) => {
  //   const Name = name.toLowerCase();

  //   const findName = contacts
  //     .map(contact => contact.name.toLowerCase())
  //     .includes(Name);

  //   if (findName) {
  //     alert(`${Name} is already in contacts`);
  //     return;
  //   }

  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts(state => [contact, ...state]);
  // };

  // const deleteContact = id => {
  //   setContacts(state => state.filter(contact => contact.id !== id));
  // };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <div className="container">
      <section className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter
        // value={filter}
        // onChange={changeFilter}
        />
        <ContactList
        // contacts={getVisibleContacts()}
        // onDeleteContact={deleteContact}
        />
      </section>
    </div>
  );
}
