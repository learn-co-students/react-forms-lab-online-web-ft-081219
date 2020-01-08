import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: "",
    };
  }

  handleInput = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text" 
          name="message"
          id="message"
          value = {this.state.input}
          onChange = {this.handleInput}
        />
        <p>{this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
