import React from 'react';
import { AiFillDollarCircle, AiFillHeart } from 'react-icons/ai';
import Card from '../../components/card/Card';
import styles from './Services.module.scss';

const Services = () => (
  <div className={styles.services}>
    <div className={styles.title}>OR You can buy individual services</div>
    <div className={styles.container}>
      <Card
        icon={<AiFillDollarCircle size="3rem" color="#512e3c" />}
        title="Full Service Payroll"
        subTitle="Pay your people in minute with reliable, modern payroll"
      />
      <Card
        icon={<AiFillHeart size="3rem" color="#e4836b" />}
        title="Benefits Administration"
        subTitle="Easily manage your medical, dental, vision, 401K, and more in one place"
      />
    </div>
  </div>
);

export default Services;
