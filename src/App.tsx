import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import Button from './components/button/Button';
import Services from './pages/services/Services';
import Offer from './pages/offer/Offer';
import PackageDetails from './pages/packageDetails/PackageDetails';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PackageDetails />
      </Route>
      <Route path="/offer">
        <Offer />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
    </Switch>
    <div className={styles.appContainer}>
      <div className={styles.navigation}>
        <Link to="/">
          <Button>Package Details</Button>
        </Link>
        <Link to="/offer">
          <Button>Offer</Button>
        </Link>
        <Link to="/services">
          <Button>Services </Button>
        </Link>
      </div>
    </div>
  </Router>
);

export default App;
