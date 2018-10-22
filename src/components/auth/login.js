import React from 'react';
import { login } from '@/api/request';

const style = {
  input: {
    boxSizing: 'border-box',
    margin: '32px 0',
    display: 'block',
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    fontSize: '16px',
    padding: '0 8px',
  },
  button: {
    margin: '12px 0',
    display: 'block',
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disabled: false,
      response: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ disabled: true, error: null, response: null });
    login(this.state.username, this.state.password)
      .then(response => this.setState({ response, disabled: false }))
      .catch(error => this.setState({ response: error.message, disabled: false }));
  }

  onChangeFactory(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    };
  }

  render() {
    const {
      username, password, disabled, response,
    } = this.state;

    return (
      <div>
        <p>{response || ''}</p>
        <form onSubmit={this.handleSubmit}>
          <input style={style.input} type="text" name="username" placeholder="your username"
            value={username} onChange={this.onChangeFactory('username')} required/>
          <input style={style.input} type="password" name="password" placeholder="your password"
            value={password} onChange={this.onChangeFactory('password')} required/>
          <input style={style.button} type="submit" value={disabled ? '...' : 'login'}
            disabled={disabled}/>
        </form>
      </div>
    );
  }
}

export default Login;
