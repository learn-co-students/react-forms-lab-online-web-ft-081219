import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (e) => {
    const username = e.target.value
    
    this.setState({
      username: username
    })
  }

  handlePassChange = (e) => {
    const pass = e.target.value
    
    this.setState({
      password: pass
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.username !== "" && this.state.password !== "") {
      const formData = {username: this.state.username, password: this.state.password}
      this.props.handleLogin(formData)
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.handleUsernameChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.handlePassChange(e)} />
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
