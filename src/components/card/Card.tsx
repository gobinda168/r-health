import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface Props {
  icon: ReactNode;
  title: string;
  subTitle: string;
}
const Card = ({ icon, title, subTitle }: Props) => (
  <div className={styles.container}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.title}>{title}</div>
    <div className={styles.subTitle}>{subTitle}</div>
    <div className={styles.divider} />
  </div>
);

export default Card;
