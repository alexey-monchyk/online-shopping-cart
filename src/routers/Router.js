import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CartPage from '../components/CartPage';
import HomePage from '../components/HomePage';

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/cart" component={CartPage} />
  </Switch>
);

export default Router;