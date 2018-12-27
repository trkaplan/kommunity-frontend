import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '@/containers/pages/home';
import Login from '@/containers/pages/login';
import Logout from '@/containers/pages/logout';
import MemberProfile from '@/containers/pages/member-profile';
import CommunityDiscover from '@/containers/pages/community-discover';
import CommunityList from '@/containers/pages/communities';
import CommunitySettings from '@/containers/pages/community-settings';
import Error404 from '@/containers/pages/404';
import ResetPassword from '@/components/pages/reset-password';
import '@/css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/member/profile" component={MemberProfile} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/communities" component={CommunityList} />
    <Route exact path="/community/:communityUuid" component={CommunityDiscover} />
    <Route exact path="/community/:communityUuid/settings" component={CommunitySettings} />
    <Route component={Error404} />
  </Switch>
);

export default App;
