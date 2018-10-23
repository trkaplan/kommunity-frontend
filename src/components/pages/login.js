import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Login from './login/login-form';
import Signup from './login/signup-form';

const style = {
  page: {
    maxWidth: '980px',
    margin: 'auto',
  },
  header: {
    border: '1px solid #000',
    lineHeight: '60px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '40px 0',
  },
  section: {
    width: '44%',
  },
  box: {
    borderRadius: '30px',
    border: '1px solid #000',
    padding: '40px 32px 32px',
  },
};

class Auth extends React.Component {
  render() {
    return (
      <div style={style.page}>
        <Header/>
        <div style={style.container}>
          <div style={style.section}>
            <h2>New member?</h2>
            <h2>Signup now!</h2>
            <div style={style.box}>
              <Signup/>
            </div>
          </div>
          <div style={style.section}>
            <h2>Existing member?</h2>
            <h2>Login to your account</h2>
            <div style={style.box}>
              <Login/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Auth;
