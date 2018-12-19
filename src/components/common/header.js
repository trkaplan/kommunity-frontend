import React, { Fragment } from 'react';
import { Link, Button, Input, Icon, Popup, Title, Paragraph } from '@/components/ui';
import i18n from '@/i18n';
import Login from '@/components/pages/login/login-form';
import Signup from '@/components/pages/login/signup-form';
import Logo from '@/components/common/logo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      searchExpanded: false,
      showLogin: false,
      showSignup: false,
    };
  }

  toggleMenu = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };

  toggleSearch = () => {
    const { searchExpanded } = this.state;
    this.setState({
      searchExpanded: !searchExpanded,
    });
  };

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
    const { showLogin, showSignup, menuOpen, searchExpanded } = this.state;

    const classes = {
      buttonLogin: `text-base hover:text-primary hover:font-bold sm:bg-primary sm:text-white
                    sm:hover:text-white sm:w-full sm:leading-xl sm:py-0 sm:ml-1 sm:mr-2`,
      buttonSignup: `text-base border-lightBlueGrey sm:border-lightBlueGrey sm:border-2 sm:w-full
                     sm:leading-xl sm:py-0 sm:ml-2 sm:mr-1`,
      buttonsWrapper: `sm:fixed sm:pin-b sm:pin-l sm:z-20 sm:bg-white sm:w-full sm:p-4 sm:flex sm:justify-around`,
      link: 'px-4 py-2 hover:font-bold sm:text-xl leading-xl py-3',
      linkColor: 'hover:text-primary',
      linkWrapper: `flex flex-grow sm:order-3 sm:flex-col sm:pt-4 sm:pl-3 ${
        menuOpen ? '' : 'sm:hidden'
      }`,
      logo: `wrapper sm:flex sm:justify-between mt-1 sm:order-1 ${
        searchExpanded ? 'sm:!hidden' : 'sm:flex'
      }`,
      menuIcon: `iconButton hidden sm:inline-block sm:order-2 p-2 ${
        searchExpanded ? 'sm:hidden' : 'sm:inline-block'
      }`,
      searchInput: `sm:order-0 ${searchExpanded ? 'sm:block' : 'sm:hidden'}`,
      searchInputCollapsed: 'stroke-current text-lightBlueGrey border-none hidden sm:block mt-2',
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

    const searchInputCollapsed = searchExpanded ? (
      <Button
        onClick={this.toggleSearch}
        styleType="custom"
        extraClassName="text-base text-blueyGrey self-center "
        label={i18n.t('navbar.cancelSearch')}
        size="small"
      />
    ) : (
      <Icon name="Search" className={classes.searchInputCollapsed} onClick={this.toggleSearch} />
    );

    return (
      <Fragment>
        <header className="flex items-center my-6 sm:my-0 sm:p-4 sm:items-start sm:flex-wrap sm:justify-between">
          <Logo extraClassName={classes.logo} />
          <div className={classes.linkWrapper}>
            <Link color={classes.linkColor} extraClassName={classes.link} to="/communities">
              Communities
            </Link>
            <Link color={classes.linkColor} extraClassName={classes.link} to="/features">
              Features
            </Link>
            <Link color={classes.linkColor} extraClassName={classes.link} to="/features">
              Pricing
            </Link>
          </div>
          <Input
            iconLeft={
              <Icon name="Search" className="stroke-current text-lightBlueGrey border-none" />
            }
            placeholder="Search Communities"
            extraWrapperClassName={classes.searchInput}
            type="text"
            id="header-search"
          />
          {searchInputCollapsed}
          {/* TODO: replace div with IconButton component when it is deployed #72 icon button */}
          <div className={classes.menuIcon}>
            <Icon
              name={menuOpen ? 'X' : 'Menu'}
              className="text-lightBlueGrey"
              onClick={this.toggleMenu}
              title={i18n.t('navbar.menu')}
            />
          </div>
          <div className={classes.buttonsWrapper}>
            <Button
              extraClassName={classes.buttonLogin}
              size="small"
              styleType="custom"
              label="Login"
              onClick={() => this.togglePopup('showLogin')}
            />

            <Button
              extraClassName={classes.buttonSignup}
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
      </Fragment>
    );
  }
}

export default Header;
