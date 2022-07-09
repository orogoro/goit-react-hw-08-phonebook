import { useSelector, useDispatch } from 'react-redux';
import { contactSelector, contactOperations } from 'redux/phonebook';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactSelector.getVisibleContacts);
  const isLoading = useSelector(contactSelector.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    contacts.length > 0 && (
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, phone }) => (
          <li className={styles.contactItem} key={id}>
            {name}: {phone}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => dispatch(contactOperations.deleteContact(id))}
            >
              Delete
              <ClipLoader
                className={styles.loader}
                // color={color}
                loading={isLoading}
                size={10}
              />
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
