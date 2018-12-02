import React from 'react';
import { logout } from '@/api/request';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    logout();
  }

  render() {
    return (
      <div className="logout" onClick={this.handleLogoutClick}>
        LOGOUT
      </div>
    );
  }
}

export default Logout;
