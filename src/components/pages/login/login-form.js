import React from 'react';
import { login } from '@/api/request';

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      password: '',
      response: null,
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ disabled: true, error: null, response: null });
    login(this.state.username, this.state.password)
      .then(response => this.setState({ disabled: false, response }))
      .catch(error => this.setState({ disabled: false, response: error.message }));
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
