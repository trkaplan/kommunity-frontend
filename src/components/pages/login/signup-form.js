import React from 'react';
import { signup } from '@/api/request';

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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // password match validation
    const { password, passwordRepeat } = this.state;
    if (password !== passwordRepeat) {
      this.setState({ error: new Error('passwords don\'t match!') });
    } else {
      this.setState({ disabled: true, error: null, response: null });
      signup(this.state.email, this.state.password)
        .then(response => this.setState({ disabled: false, response: JSON.stringify(response) }))
        .catch(error => this.setState({ disabled: false, response: error.message }));
    }
  }

  onChangeFactory(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    const {
      email, password, passwordRepeat, disabled, response,
    } = this.state;

    return (
      <div>
        <p>{response || ''}</p>
        <form onSubmit={this.handleSubmit}>
          <input style={style.input} type="text" name="email" placeholder="enter your e-mail"
            value={email} onChange={this.onChangeFactory('email')} required/>
          <input style={style.input} type="password" name="password" placeholder="set a password"
            value={password} onChange={this.onChangeFactory('password')} required/>
          <input style={style.input} type="password" name="passwordRepeat"
            placeholder="repeat password" value={passwordRepeat}
            onChange={this.onChangeFactory('passwordRepeat')} required/>
          <input style={style.button} type="submit" value={disabled ? '...' : 'signup'}
            disabled={disabled} />
        </form>
      </div>
    );
  }
}

export default Signup;
