import React from 'react';
import { Link, Button, Input, Icon, Popup, Title, Paragraph } from '@/components/ui';
import Login from '@/components/pages/login/login-form';
import Signup from '@/components/pages/login/signup-form';
import Logo from '@/components/common/logo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false,
    };
  }

  togglePopup = key => {
    this.setState(oldState => ({
      [key]: !oldState[key],
    }));
  };

  switchPopup = () => {
    this.setState(oldState => ({
      showLogin: !oldState.showLogin,
      showSignup: !oldState.showSignup,
    }));
  };

  greet = () => {
    const curHr = new Date().getHours();

    if (curHr > 5 && curHr < 12) {
      return 'Good morning';
    }
    if (curHr > 11 && curHr < 18) {
      return 'Good afternoon';
    }
    return 'Good evening';
  };

  render() {
    const { showLogin, showSignup } = this.state;

    const classes = {
      button: 'font-medium text-base',
      link: 'px-4 py-2',
    };

    const content = {
      form: showLogin ? <Login /> : <Signup />,
      label: showLogin ? 'Sign up now' : 'Log in now',
      onClose: showLogin ? 'showLogin' : 'showSignup',
      redirect: showLogin ? "Don't have an account?" : 'Have an account?',
      subTitle: showLogin
        ? 'Welcome back to kommunity.app'
        : 'Discover and create amazing communities.',
      title: showLogin ? `${this.greet()}!` : 'Create your account',
    };

    return (
      <div>
        <header className="flex items-center my-6">
          <Logo extraClassName="-mt-3" />
          <div className="flex flex-grow">
            <Link extraClassName={classes.link} to="/communities">
              Communities
            </Link>
            <Link extraClassName={classes.link} to="/features">
              Features
            </Link>
            <Link extraClassName={classes.link} to="/features">
              Pricing
            </Link>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <Input
                iconLeft={
                  <Icon name="Search" className="stroke-current text-lightBlueGrey border-none" />
                }
                placeholder="Search Communities"
                type="text"
                id="header-search"
              />
            </div>
            <Button
              extraClassName={classes.button}
              size="small"
              styleType="plain"
              label="Login"
              onClick={() => this.togglePopup('showLogin')}
            />

            <Button
              extraClassName={classes.button}
              size="small"
              styleType="outline"
              label="Signup"
              onClick={() => this.togglePopup('showSignup')}
            />
          </div>
        </header>
        {(showLogin || showSignup) && (
          <Popup
            show
            wrapperExtraClassName="text-center"
            onClose={() => this.togglePopup(content.onClose)}
          >
            <div className="px-12">
              <Title type="h5" extraClassName="font-extrabold mb-2">
                {content.title}
              </Title>
              <Paragraph extraClassName="text-gunmetal mb-10">{content.subTitle}</Paragraph>
              {content.form}
            </div>
            <Paragraph extraClassName="mt-10 p-1 bg-paleGrey text-blueyGrey rounded-4">
              {content.redirect}
              <Button
                extraClassName="font-medium text-base pl-2 pr-2"
                size="small"
                styleType="plain"
                label={content.label}
                onClick={() => this.switchPopup()}
              />
            </Paragraph>
          </Popup>
        )}
      </div>
    );
  }
}

export default Header;
