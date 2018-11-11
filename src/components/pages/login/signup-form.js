import React from 'react';
import { signup } from '@/api/request';
import Reaptcha from 'reaptcha';

const style = {
  button: {
    backgroundColor: '#000',
    border: 'none',
    color: '#fff',
    display: 'block',
    fontSize: '16px',
    height: '40px',
    lineHeight: '40px',
    margin: '12px 0',
    textAlign: 'center',
    width: '100%',
  },
  input: {
    boxSizing: 'border-box',
    display: 'block',
    fontSize: '16px',
    height: '40px',
    lineHeight: '40px',
    margin: '32px 0',
    padding: '0 8px',
    width: '100%',
  },
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      email: '',
      password: '',
      passwordRepeat: '',
      response: null,
      verified: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onVerify = () => {
    this.setState({ verified: true });
  };

  handleSubmit(e) {
    e.preventDefault();

    // password match validation
    const {
      password, passwordRepeat, verified,
    } = this.state;
    if (password !== passwordRepeat) {
      this.setState({ response: 'passwords don\'t match!' });
    } else {
      this.setState({ disabled: true, response: null });

      if (verified) {
        signup(this.state.email, this.state.password)
          .then(response => this.setState({ disabled: false, response: JSON.stringify(response) }))
          .catch(error => this.setState({ disabled: false, response: error.message }));
      } else {
        this.setState({ disabled: false, response: 'captcha is not verified!' });
      }
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      email, password, passwordRepeat, disabled, response,
    } = this.state;

    return (
      <div>
        <p>{response || ''}</p>

        <form onSubmit={this.handleSubmit}>
          <input style={style.input}
            type="email"
            name="email"
            placeholder="enter your e-mail"
            value={email}
            onChange={this.handleInputChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required/>
          <input style={style.input}
            type="password"
            name="password"
            placeholder="set a password"
            value={password}
            onChange={this.handleInputChange}
            minLength="6"
            required/>
          <input style={style.input}
            type="password"
            name="passwordRepeat"
            placeholder="repeat password"
            value={passwordRepeat}
            onChange={this.handleInputChange}
            required/>
          <Reaptcha
            sitekey="6Lfxa3kUAAAAAA2Urk0EXbI1cUKU3xUCvCG6HEIY"
            onVerify={this.onVerify}
          />
          <button
            style={style.button}
            disabled={disabled}
          >
            {disabled ? '...' : 'signup'}
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
