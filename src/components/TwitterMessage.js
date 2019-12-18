import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
      // charsLeft: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
      // OR:
      // message: event.target.value
      // both work, the first one requires a name='message' field on form
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message}
        onChange={this.handleChange}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
