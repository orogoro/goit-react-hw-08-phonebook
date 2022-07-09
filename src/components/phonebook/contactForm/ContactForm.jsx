import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { contactOperations, contactSelector } from 'redux/phonebook';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const isLoading = useSelector(contactSelector.getLoading);
  console.log(isLoading);
  const dispatch = useDispatch();

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactOperations.addContact({ name, phone }));

    resetName();
    resetNumber();
  };

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setPhone('');
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
          name="phone"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputNumberId}
        />
      </label>

      <button className={styles.addBtn} type="submit">
        add contact
        <ClipLoader
          className={styles.loader}
          // color={color}
          loading={isLoading}
          size={10}
        />
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
