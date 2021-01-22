import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import Button from './components/button/Button';
import Services from './pages/services/Services';
import Offer from './pages/offer/Offer';
import PackageDetails from './pages/packageDetails/PackageDetails';

const App = () => (
  <>
    <PackageDetails />
    <Services />
    <Offer />
  </>
);

export default App;
