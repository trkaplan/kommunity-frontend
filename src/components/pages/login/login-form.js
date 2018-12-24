import React from 'react';
import { login } from '@/api/request';
import { Button, Input, Notification, Icon } from '@/components/ui';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: null, // server error
      password: '',
      response: null,
      username: '',
    };
  }

  handleSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ disabled: true, error: null });

    login(username, password)
      .then(response => this.setState({ disabled: false, response }))
      .catch(error => this.setState({ disabled: false, error }));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { username, password, disabled, response, error } = this.state;

    // TODO bariscc: maybe we should redirect within handlesubmit and use browser history instead of this
    if (response) {
      if (!response.username) {
        return <Redirect to="/boarding" />;
      }
      return <Redirect to="/" />;
    }

    return (
      <div>
        {error && <Notification styleType="danger" text={error.message} flat />}
        <form onSubmit={this.handleSubmit}>
          <Input
            extraClassName="w-full block"
            name="username"
            type="text"
            id="login-username"
            placeholder="your username"
            value={username}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="User" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Input
            extraClassName="w-full block"
            type="password"
            name="password"
            id="login-password"
            placeholder="your password"
            value={password}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Button
            extraClassName="w-full block my-4 font-semibold"
            size="large"
            styleType="primary"
            type="submit"
            label={disabled ? '...' : 'Login'}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

export default Login;
