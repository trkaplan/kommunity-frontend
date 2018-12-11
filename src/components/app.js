import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '@/containers/pages/home';
import Login from '@/containers/pages/login';
import Logout from '@/containers/pages/logout';
import MemberProfile from '@/containers/pages/member-profile';
import CommunityList from '@/containers/pages/communities';
import Error404 from '@/containers/pages/404';
import '@/css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/member/profile" component={MemberProfile} />
    <Route exact path="/communities" component={CommunityList} />
    <Route component={Error404} />
  </Switch>
);

export default App;
