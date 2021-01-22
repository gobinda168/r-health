import React from 'react';
import { AiFillDollarCircle, AiFillHeart } from 'react-icons/ai';
import Card from '../../components/card/Card';
import styles from './Services.module.scss';

const Services = () => {
  const BLUE_COLOR = '#2b8fff';
  const PINK_COLOR = '#e4836b';
  return (
    <div className={styles.services}>
      <div className={styles.title}>OR You can buy individual services</div>
      <div className={styles.container}>
        <Card
          icon={<AiFillDollarCircle size="3rem" color={BLUE_COLOR} />}
          title="Full Service Payroll"
          subTitle="Pay your people in minute with reliable, modern payroll"
        />
        <Card
          icon={<AiFillHeart size="3rem" color={PINK_COLOR} />}
          title="Benefits Administration"
          subTitle="Easily manage your medical, dental, vision, 401K, and more in one place"
        />
      </div>
    </div>
  );
};

export default Services;
