/* eslint-disable react/no-unused-state */
import React from 'react';
import { Button, Input, Title, Paragraph, Icon, Link } from '@/components/ui';
import { forgotPassword } from '@/api/request';
import Recaptcha from 'react-google-recaptcha';
import { RECAPTCHA_API_KEY, mailPattern } from '@/constants';

const style = {
  bottomContent: 'w-full bg-paleGrey py-3 text-blueyGrey',
  formContent: 'w-full max-w-9/12',
  wrapper: 'flex flex-col items-center text-center',
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: [], // validation
      response: null,
    };

    // reference for invisible captcha
    this.captcha = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ errors: [] });
    // execute captcha
    this.captcha.current.execute();
  };

  // captcha verification
  onVerify = () => {
    const { email } = this.state;
    // todo mustaphaturhan: there will be an action after backend comes.
    // show server message with a notification component
    forgotPassword(email)
      .then(response => this.setState({ response }))
      .catch(error => this.setState(oldState => ({ errors: [...oldState.errors, error] })));
  };

  // captcha error, probably connection issue.
  onError = () => {
    this.setState(oldState => ({
      errors: [
        ...oldState.errors,
        'Error occured on verification. Check your connection and try again.',
      ],
    }));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, errors } = this.state;

    return (
      <div className={style.wrapper}>
        <div className={style.formContent}>
          <Title type="h5" extraClassName="font-extrabold">
            Reset your password
          </Title>
          <Paragraph extraClassName="pt-2">Send a reset link to your mail address</Paragraph>
          {/* TODO mustaphaturhan: there will be notification instead of paragraph */}
          {errors &&
            errors.map((error, i) => (
              <Paragraph key={i.toString()} extraClassName="text-red">
                {error.message}
              </Paragraph>
            ))}
          <Recaptcha
            ref={this.captcha}
            sitekey={RECAPTCHA_API_KEY}
            size="invisible"
            onChange={this.onVerify}
            onErrored={this.onError}
          />
          <form onSubmit={this.handleSubmit}>
            <Input
              extraClassName="w-full block"
              name="email"
              type="email"
              placeholder="Mail Adress"
              value={email}
              onChange={this.handleInputChange}
              pattern={mailPattern}
              required
              errorText={errors.email}
              iconLeft={<Icon name="Mail" className="text-lightBlueGrey" />}
              extraWrapperClassName="mt-10"
            />
            <Button
              extraClassName="w-full block my-8 font-semibold"
              size="medium"
              styleType="primary"
              type="submit"
              label="Reset Password"
            />
          </form>
        </div>
        <div className={style.bottomContent}>
          <Paragraph>
            Return to
            {' '}
            <Link color="text-primary hover:text-primaryDark" to="/">
              sign in
            </Link>
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
