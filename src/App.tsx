import React from 'react';
import styles from './App.module.scss';
import Services from './pages/services/Services';
// import Offer from './pages/offer/Offer';
// import PackageDetails from './pages/packageDetails/PackageDetails';

const App = () => (
  <div className={styles.appContainer}>
    {/* <PackageDetails /> */}
    {/* <Offer /> */}
    <Services />
  </div>
);

export default App;
