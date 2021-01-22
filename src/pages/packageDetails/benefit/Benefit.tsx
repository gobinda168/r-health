import React from 'react';
import { MdDone } from 'react-icons/md';
import styles from './Benefit.module.scss';

interface Props {
  benefit: string;
  divider: boolean;
}
const Benefit = ({ benefit, divider }: Props) => (
  <div className={styles.benefitContainer}>
    <div className={styles.container}>
      <div className={styles.icon}>
        <MdDone />
      </div>
      <div className={styles.text}>{benefit}</div>
    </div>
    {divider && <div className={styles.divider} />}
  </div>
);

export default Benefit;
