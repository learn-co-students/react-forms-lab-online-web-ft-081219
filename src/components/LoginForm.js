import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password
      })
    }

  }
  render() {
    return (
      <form onSubmit={e => this.handleLogin(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleInputChange(e)}
            id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handleInputChange(e)} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
