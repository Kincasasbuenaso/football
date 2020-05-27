import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/index';

const Router = () => (
  <BrowserRouter>
  <div className="main">
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  </div>
  </BrowserRouter>
);

export default Router;
