import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../loader/Loader';
import { authOperations, authSelector } from 'redux/auth';
import styles from './Register.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loader = useSelector(authSelector.getLoader);
  const dispatch = useDispatch();

  const hanldeChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const hanldeSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.registerUser({ name, email, password }));
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Create your account</h1>

      <form className={styles.form} onSubmit={hanldeSubmit}>
        <label className={styles.label}>
          <span className={styles.text}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Input for your name"
            className={styles.input}
            value={name}
            onChange={hanldeChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.label}>
          <span className={styles.text}>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={hanldeChange}
            className={styles.input}
            placeholder="Your e-mail"
            aria-label="Input for your Email"
            required
          />
        </label>

        <label className={styles.label}>
          <span className={styles.text}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={hanldeChange}
            className={styles.input}
            placeholder="Should be at least 7 characters"
            aria-label="Input for your password"
            required
          />
        </label>

        <div className={styles.container}>
          <button type="submit" className={styles.button}>
            Create account
            <Loader loading={loader} />
          </button>
        </div>
      </form>
    </section>
  );
}
