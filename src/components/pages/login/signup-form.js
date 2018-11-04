import React from 'react';
import { signup } from '@/api/request';

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

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordRepeat: '',
      disabled: false,
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
      this.setState({ disabled: true, response: null, error: null });
      signup(this.state.email, this.state.password)
        .then(response => this.setState({ response: JSON.stringify(response), disabled: false }))
        .catch(error => this.setState({ response: error.message, disabled: false }));
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
