import React from 'react';
import styles from './Button.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ children }: any) => (
  <button type="button" className={styles.button}>
    {children}
  </button>
);

export default Button;
