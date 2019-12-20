import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
      maxChars: this.state.maxChars - 1
    })

  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleMessage(e)} value={this.state.message} type="text" name="message" id="message" />
        <strong>{this.state.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
