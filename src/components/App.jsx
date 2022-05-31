import React, { Component } from 'react';
import ContactForm from './phonebook/contactForm/ContactForm';

import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitForm = data => {};

  render() {
    return (
      <div className="container">
        <section className={styles.phonebook}>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.submitForm} />
          <h2>Contacts</h2>
        </section>
      </div>
    );
  }
}
