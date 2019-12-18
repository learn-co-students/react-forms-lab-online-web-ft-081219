import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "" ,password: ""};
  }

  handleLogin = event=> {
    console.log(event)
      if(this.state.username !== "" && this.state.password !== ""){
        this.props.handleLogin(this.state)

      }
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input value ={this.state.username} onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value ={this.state.password} onChange={this.handleChange} id="password" name="password" type="password" />
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
