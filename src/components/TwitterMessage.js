import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => (this.props.maxChars - this.state.message.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message} />
        <p>{this.remainingChars()} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
