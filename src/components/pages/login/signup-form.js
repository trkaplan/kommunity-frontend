import React from 'react';
import { signup } from '@/api/request';
import {
  Card, Button, Input, Title,
} from '@/components/ui';
import Recaptcha from 'react-google-recaptcha';
import { Mail, Lock } from 'react-feather';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: null, // server validation
      errors: {}, // frontend validation
      password: '',
      passwordRepeat: '',
      response: null,
    };

    // reference for invisible captcha
    this.captcha = null;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ error: null, errors: {} });

    // password match validation
    const { password, passwordRepeat } = this.state;

    if (password !== passwordRepeat) {
      this.setState({ errors: { passwordRepeat: 'passwords don\'t match!' } });
    } else {
      this.captcha.execute();
    }
  }

  // captcha verification
  onVerify = () => {
    // TODO bariscc: redirect user to boarding page on success
    // otherwise show server error message with a notification component
    signup(this.state.email, this.state.password)
      .then(response => this.setState({ response }))
      .catch(error => this.setState({ error }));
  }

  // captcha error, probably connection issue.
  onError = () => {
    this.setState({ errors: { verification: 'Error occured on verification. Check your connection and try again.' } });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      email, password, passwordRepeat, response, errors, error,
    } = this.state;

    if (response) { return <div>registration successful</div>; }

    return (
      <Card shadow="lg">
        <div>
          { error
            && <p style={{ color: 'red' }}>{error.message}</p>
          }
          <Title type="h6">New member?</Title>
          <Title type="h5">Signup now!</Title>
          <form onSubmit={this.handleSubmit} method="POST">
            <Input
              extraClassName="w-full block"
              name="email"
              type="email"
              placeholder="enter your e-mail"
              value={email}
              onChange={this.handleInputChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              errorText={errors.email}
              iconLeft={<Mail className="text-lgray"/>}
              extraWrapperClassName="my-4"
            />
            <Input
              extraClassName="w-full block"
              type="password"
              name="password"
              placeholder="set a password"
              value={password}
              onChange={this.handleInputChange}
              minLength="6"
              required
              errorText={errors.password}
              iconLeft={<Lock className="text-lgray" />}
              extraWrapperClassName="my-4"
            />
            <Input
              extraClassName="w-full block"
              type="password"
              name="passwordRepeat"
              placeholder="repeat password"
              value={passwordRepeat}
              onChange={this.handleInputChange}
              required
              errorText={errors.passwordRepeat}
              iconLeft={<Lock className="text-lgray" />}
              extraWrapperClassName="my-4"
            />
            <Recaptcha
              ref={(e) => { this.captcha = e; }}
              sitekey="6Lfxa3kUAAAAAA2Urk0EXbI1cUKU3xUCvCG6HEIY"
              size="invisible"
              onChange={this.onVerify}
              onErrored={this.onError}
            />
            { errors.verification
            && <p>{errors.verification}</p>
            }
            <Button
              extraClassName="w-full block my-6"
              size="large"
              styleType="primary"
              type="submit"
              label="Signup"
            />
          </form>
        </div>
      </Card>
    );
  }
}

export default Signup;
