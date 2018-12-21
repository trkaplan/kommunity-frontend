import React from 'react';
import { Link, Button, Input, Icon, Popup, Title, Paragraph } from '@/components/ui';
import i18n from '@/i18n';
import Login from '@/components/pages/login/login-form';
import Signup from '@/components/pages/login/signup-form';
import Logo from '@/components/common/logo';
import { throttle } from 'throttle-debounce';

const delta = 5;
class Header extends React.Component {
  state = {
    headerPosition: 'static',
    headerVisible: true,
    lastScrollTop: 0,
    menuOpen: false,
    searchExpanded: false,
    showLogin: false,
    showSignup: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    throttle(this.hasScrolled(), 250);
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
  };

  hasScrolled = () => {
    const st = window.scrollY;
    const { lastScrollTop } = this.state;
    if (Math.abs(lastScrollTop - st) <= delta && st > 0) return;
    if (st < lastScrollTop && st < 1) {
      // Scrolling Up
      // Set Header position back to 'static' from 'fixed' if scrolled up to top of the page
      this.setState({ headerPosition: 'static', headerVisible: true });
      return;
    }
    if (st > lastScrollTop && st > 96) {
      // Scrolling Down
      // Set header position to fixed and hide it while scrolling down
      this.setState({ headerPosition: 'fixed', headerVisible: false });
    } else if (st < lastScrollTop && st < this.getDocHeight()) {
      // Scrolling Up
      // Make Header visible while scrolling up
      this.setState({ headerVisible: true });
    }

    this.setState({
      lastScrollTop: st,
    });
  };

  toggleMenu = () => {
    const { menuOpen } = this.state;
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

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
    const {
      showLogin,
      showSignup,
      menuOpen,
      searchExpanded,
      headerPosition,
      headerVisible,
    } = this.state;

    const classes = {
      buttonLogin: `text-base hover:text-primary hover:font-bold sm:bg-primary sm:text-white
                    sm:hover:text-white sm:w-full sm:leading-xl sm:py-0 sm:ml-1 sm:mr-2`,
      buttonSignup: `text-base border-lightBlueGrey sm:border-lightBlueGrey sm:border-2 sm:w-full
                     sm:leading-xl sm:py-0 sm:ml-2 sm:mr-1`,
      buttonsWrapper: `sm:fixed sm:pin-b sm:pin-l sm:z-20 sm:bg-white sm:w-full sm:p-4 sm:flex sm:justify-around`,
      header: `container flex items-center w-full h-24 sm:my-0 sm:items-start sm:flex-wrap sm:justify-between
              sm:h-18 sm:p-4 ${menuOpen ? 'sm:h-auto' : ''}`,
      headerBottomShadow: 'hidden sm:block absolute w-full h-4 pin-l pin-t shadow-md',
      headerPlaceHolder: 'h-24',
      headerWrapper: `flex justify-center nav-transition ${
        headerPosition === 'fixed' ? 'fixed bg-white w-full pin-t pin-l z-20 shadow-md' : 'nav-up'
      } ${headerVisible === false ? 'nav-up sm:nav-up shadow-none' : ''} ${
        menuOpen ? 'sm:h-full shadow-none' : ''
      }`,
      link: 'px-4 py-2 hover:font-bold sm:text-xl leading-xl py-3',
      linkColor: 'hover:text-primary',
      linksWrapper: `flex flex-grow sm:order-3 sm:flex-col sm:pt-4 sm:pl-3 sm:bg-white 
      sm:z-20 sm:absolute sm:pin-t-56 sm:pin-l sm:overflow-hidden sm:w-full sm:h-full ${
        menuOpen && headerVisible ? '' : 'sm:hidden'
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
      <div className={classes.headerPlaceHolder}>
        <div className={classes.headerWrapper}>
          <header className={classes.header}>
            <Logo extraClassName={classes.logo} />
            <div className={classes.linksWrapper}>
              <div className={classes.headerBottomShadow} />
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
        </div>
      </div>
    );
  }
}

export default Header;
