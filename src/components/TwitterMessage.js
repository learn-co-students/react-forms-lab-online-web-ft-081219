import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      message: ""
    };
  }

  handleMessageChange = (e) => {
    const message = e.target.value
    this.setState({
        remainingChars: this.props.maxChars - message.length,
        message: message
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleMessageChange(e)} />
        <div>Remaining Characters: {this.state.remainingChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
