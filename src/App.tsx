import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import PackageDetails from './pages/packageDetails/PackageDetails';

const App = () => (
  <div className={styles.appContainer}>
    <PackageDetails />
  </div>
);

export default App;
