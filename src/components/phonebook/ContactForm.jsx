import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Phonebook.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.lableName} htmlFor={this.inputNameId}>
          Name
          <input
            className={styles.inputForm}
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.inputNameId}
          />
        </label>
        <label className={styles.lableName} htmlFor={this.inputNumberId}>
          Number
          <input
            className={styles.inputForm}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputNumberId}
          />
        </label>

        <button className={styles.addBtn} type="submit">
          add contact
        </button>
      </form>
    );
  }
}
