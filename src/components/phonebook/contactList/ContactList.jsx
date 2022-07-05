import { useSelector, useDispatch } from 'react-redux';
import { contactSelector, contactOperations } from 'redux/phonebook';
import { useEffect } from 'react';

import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactSelector.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    contacts.length > 0 && (
      <ul
        className={styles.contactList}
        onClick={() => dispatch(contactOperations.fetchContacts())}
      >
        {contacts.map(({ id, name, phone }) => (
          <li className={styles.contactItem} key={id}>
            {name}: {phone}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => dispatch(contactOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
