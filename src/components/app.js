import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/components/pages/home';
import Login from '@/components/pages/login';
import Logout from '@/components/pages/logout';
import '@/css/app.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </Switch>
);

export default App;
