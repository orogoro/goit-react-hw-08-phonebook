import { useSelector, useDispatch } from 'react-redux';
import { contactSelector, contactOperations } from 'redux/phonebook';
import { useEffect } from 'react';

import Loader from '../loader/Loader';
import cross from 'image/cross.png';

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
        {contacts.map(({ id, name, number }) => (
          <li className={styles.contactItem} key={id}>
            <div className={styles.flex}>
              <p className={styles.name}>{name}:</p>
              <a href={`tel:${number}`} className={styles.phone}>
                {number}
              </a>
            </div>
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => dispatch(contactOperations.deleteContact(id))}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <img className={styles.cross} src={cross} width="17" alt="" />
              )}
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
