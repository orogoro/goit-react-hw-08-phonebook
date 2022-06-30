import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { addContact } from 'redux/phonebook/actions';
// import { useSelector, useDispatch } from 'react-redux';
// import { nameValue, numberValue } from '../../../redux/phonebook/actions';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const name = useSelector(state => state.form.name);
  // const number = useSelector(state => state.form.number);
  // const dispatch = useDispatch();

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

    onSubmit({
      name,
      number,
    });

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
    <form onSubmit={handleSubmit}>
      <label className={styles.lableName} htmlFor={inputNameId}>
        Name
        <input
          className={styles.inputForm}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
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
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputNumberId}
        />
      </label>

      <button className={styles.addBtn} type="submit">
        add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
