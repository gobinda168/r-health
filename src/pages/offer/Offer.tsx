import React from 'react';
import Button from '../../components/button/Button';
import styles from './Offer.module.scss';

const Offer = () => (
  <div className={styles.container}>
    <div className={styles.title}>Get Comprehensive care</div>
    <div className={styles.title}>for</div>
    <div className={styles.price}>$99 per month, per user.</div>
    <div className={styles.subTitle}>
      Find all the services in $100 per month
    </div>
    <Button>Start Now</Button>
  </div>
);

export default Offer;
