// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/actions';
import { getVisibleContacts } from 'redux/phonebook/selectors';

import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contactItem} key={id}>
          {name}: {number}
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
