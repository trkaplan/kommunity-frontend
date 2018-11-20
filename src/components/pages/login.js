import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Login from './login/login-form';
import Signup from './login/signup-form';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '40px 0',
  },
  page: {
    margin: 'auto',
    maxWidth: '980px',
  },
  section: {
    width: '44%',
  },
};

class Auth extends React.Component {
  render() {
    return (
      <div style={style.page}>
        <Header/>
        <div style={style.container}>
          <div style={style.section}>
            <Signup/>
          </div>
          <div style={style.section}>
            <Login/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Auth;
