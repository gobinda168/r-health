import React from 'react';
import Benefit from '../benefit/Benefit';
import styles from './Benefits.module.scss';

const Benefits = () => (
  <div className={styles.middleRight}>
    <div className={styles.benefitRow}>
      <Benefit benefit="Unified Employee Database" divider />
      <Benefit benefit="Customizable Reporting" divider />
    </div>
    <div className={styles.benefitRow}>
      <Benefit benefit="Onboarding / Offboarding Automation" divider />
      <Benefit benefit="Customizable Fields & Alerts" divider />
    </div>
    <div className={styles.benefitRow}>
      <Benefit benefit="Electronic Document Management" divider />
      <Benefit benefit="Customizable Position Management" divider />
    </div>
    <div className={styles.benefitRow}>
      <Benefit benefit="Task Management" divider />
      <Benefit benefit="Open API + Over 400 Integrations" divider />
    </div>
    <div className={styles.benefitRow}>
      <Benefit benefit="Workflow & Approval Automation" divider={false} />
      <Benefit benefit="Rippling Mobile App" divider={false} />
    </div>
  </div>
);

export default Benefits;
