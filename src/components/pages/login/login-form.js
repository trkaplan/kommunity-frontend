import React from 'react';
import { login } from '@/api/request';
import {
  Card, Button, Input, Title, Paragraph,
} from '@/components/ui';
import { User, Lock } from 'react-feather';

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

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ disabled: true, error: null });

    // TODO bariscc: redirect user to homepage on success
    // otherwise show server error message with a notification component
    login(this.state.username, this.state.password)
      .then(response => this.setState({ disabled: false, response }))
      .catch(error => this.setState({ disabled: false, error }));
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      username, password, disabled, response, error,
    } = this.state;

    // TODO bariscc: redirect user to homepage on success and remove this.
    if (response) { return <div>login successful</div>; }

    return (
      <Card shadow="lg">
        { error
            && <Paragraph extraClassName="text-red">{error.message}</Paragraph>
          }
        <Title type="h6">Existing member?</Title>
        <Title type="h5">Login to your account</Title>
        <form onSubmit={this.handleSubmit}>
          <Input
              extraClassName="w-full block"
              name="username"
              type="text"
              placeholder="your username"
              value={username}
              onChange={this.handleInputChange}
              required
              iconLeft={<User className="text-lgray"/>}
              extraWrapperClassName="my-4"
            />
          <Input
              extraClassName="w-full block"
              type="password"
              name="password"
              placeholder="your password"
              value={password}
              onChange={this.handleInputChange}
              required
              iconLeft={<Lock className="text-lgray"/>}
              extraWrapperClassName="my-4"
            />
          <Button
              extraClassName="w-full block my-6 font-semibold"
              size="large"
              styleType="primary"
              type="submit"
              label={disabled ? '...' : 'Login'}
              disabled={disabled}
            />
        </form>
      </Card>
    );
  }
}

export default Login;
