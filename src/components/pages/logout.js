import React from 'react';
import '$/css/home.css';
import {logout} from '$/api/request';

class Login extends React.Component {
	constructor(props) {
    super(props);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLogoutClick(e) {
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

export default Login;
