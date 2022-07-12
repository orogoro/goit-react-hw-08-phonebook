import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hanldeChange = e => {
    const { name, value } = e.target;

    switch (name) {
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

    dispatch(authOperations.loginUser({ email, password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Log in to Phonebook</h1>

      <form className={styles.form} onSubmit={hanldeSubmit}>
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
            placeholder="Your password"
            aria-label="Input for your password"
            required
          />
        </label>

        <div className={styles.container}>
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </div>
      </form>
    </section>
  );
}
