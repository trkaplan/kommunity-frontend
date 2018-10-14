import React from 'react';
import { login } from '$/api/request';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    login(this.state.username, this.state.password);
  }

  onChangeFactory(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    return (
      <div className="login">
				<form onSubmit={this.handleSubmit}>
					First name:
					<input type="text" name="username" value={this.state.username} onChange={this.onChangeFactory('username')}/>
					Last name:
					<input type="password" name="password" value={this.state.password} onChange={this.onChangeFactory('password')} />
					<input type="submit" value="Submit" />
				</form>
      </div>
    );
  }
}

export default Login;
