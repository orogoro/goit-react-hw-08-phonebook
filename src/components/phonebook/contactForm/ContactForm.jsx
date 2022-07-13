import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import Loader from '../loader/Loader';
import { contactOperations, contactSelector } from 'redux/phonebook';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactSelector.getContacts);
  const isLoading = useSelector(contactSelector.getLoading);
  const dispatch = useDispatch();

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const lowerName = name.toLowerCase();
    const contactName = contacts.some(
      contact => contact.name.toLowerCase() === lowerName
    );

    if (contactName) {
      Notiflix.Notify.failure(`${lowerName} уже есть в списке контактов`);
      return;
    }

    dispatch(contactOperations.addContact({ name, number }));
    resetName();
    resetNumber();
  };

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.lableName} htmlFor={inputNameId}>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          value={name}
          placeholder="Contact name"
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={inputNameId}
        />
      </label>
      <label className={styles.lableName} htmlFor={inputNumberId}>
        Number
        <input
          className={styles.inputForm}
          type="tel"
          name="number"
          value={number}
          placeholder="Phone number"
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="(\+?( |-|\.)?\d{1,w2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputNumberId}
        />
      </label>

      <button className={styles.addBtn} type="submit">
        Add contact
        <Loader loading={isLoading} />
      </button>
    </form>
  );
}
