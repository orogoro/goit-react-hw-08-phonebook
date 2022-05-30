import React, { Component } from 'react';
import ContactForm from './ContactForm';

import styles from './Phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitForm = data => {};

  render() {
    return (
      <section className={styles.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.submitForm} />
        <h2>Contacts</h2>
      </section>
    );
  }
}
