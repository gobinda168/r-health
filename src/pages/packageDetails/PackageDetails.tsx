import React from 'react';
import Benefits from './benefits/Benefits';
import styles from './PackageDetails.module.scss';

const PackageDetails = () => (
  <div className={styles.container}>
    <div className={styles.top} />
    <div className={styles.middle}>
      <div className={styles.middleLeft}>
        <div className={styles.recommendText}>Recommended</div>
        <div className={styles.title}>All in One Package</div>
        <div className={styles.subTitle}>
          One Package for Your comprehensive Care
        </div>
      </div>
      <Benefits />
    </div>
    <div className={styles.bottom}>OR You can buy individual services</div>
  </div>
);

export default PackageDetails;
