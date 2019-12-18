import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {tweet: "", maxChars: 280};
  }
  handleTweet = (event)=>{
    
    this.setState(previousState=>{return ({tweet: event.target.value, maxChars: previousState.maxChars - event.target.value.length  }) })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <h6>You have {this.state.maxChars} characters remainings</h6>
        <input onChange={this.handleTweet} type="text" name="message" id="message" value={this.state.tweet} />
      </div>
    );
  }
}

export default TwitterMessage;
