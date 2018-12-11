import React from 'react';
import { signup } from '@/api/request';
import { Card, Button, Input, Title, Paragraph, Icon } from '@/components/ui';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_API_KEY, mailPattern } from '@/constants';

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

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ error: null, errors: {} });

    // password match validation
    const { password, passwordRepeat } = this.state;

    if (password !== passwordRepeat) {
      this.setState({ errors: { passwordRepeat: "passwords don't match!" } });
    } else {
      this.captcha.execute();
    }
  };

  // captcha verification
  onVerify = () => {
    const { email, password } = this.state;
    // TODO bariscc: redirect user to boarding page on success
    // otherwise show server error message with a notification component
    signup(email, password)
      .then(response => this.setState({ response }))
      .catch(error => this.setState({ error }));
  };

  // captcha error, probably connection issue.
  onError = () => {
    this.setState({
      errors: {
        verification: 'Error occured on verification. Check your connection and try again.',
      },
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password, passwordRepeat, response, errors, error } = this.state;

    // TODO bariscc: redirect user to boarding page on success and remove this.
    if (response) {
      return <div>registration successful</div>;
    }

    return (
      <Card shadow="lg">
        {error && <Paragraph extraClassName="text-red">{error.message}</Paragraph>}
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
            pattern={mailPattern}
            required
            errorText={errors.email}
            iconLeft={<Icon name="Mail" className="text-lightBlueGrey" />}
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
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
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
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Recaptcha
            ref={e => {
              this.captcha = e;
            }}
            sitekey={RECAPTCHA_API_KEY}
            size="invisible"
            onChange={this.onVerify}
            onErrored={this.onError}
          />
          {errors.verification && (
            <Paragraph extraClassName="text-red">{errors.verification}</Paragraph>
          )}
          <Button
            extraClassName="w-full block my-6 font-semibold"
            size="large"
            styleType="primary"
            type="submit"
            label="Signup"
          />
        </form>
      </Card>
    );
  }
}

export default Signup;
