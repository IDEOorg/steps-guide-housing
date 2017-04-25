import React, { Component } from 'react';
import './index.less';

export default class Option extends Component {
  render() {
    return (
      <div className="option">
        <h4 className="option_tag">FOR RIGHT NOW</h4>
        <h4 className="option_headline">{this.props.text}</h4>
        <p className="option_text">As soon as you know you're going to be short on rent, talk to your landlord and be honest about the situation.</p>
      </div>
    );
  }
}
