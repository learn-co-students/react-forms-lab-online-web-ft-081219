import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
    //  debugger
     this.setState({
       [name]: value
     })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password} = this.state

    if (username && password) {
      this.props.handleLogin(username, password)
    }
  }

  // this.props.handleLogin

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
