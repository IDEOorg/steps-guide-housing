import React, { Component } from 'react';
import './index.less';

export default class Action extends Component {
  render() {
    return (
      <div className="action">
        <div className="action_img">
          <img src="../../assets/logo.svg" height="150px" width="150px" />
        </div>
        <div className="action_content">
          <h4 className="action_headline">{this.props.headline}</h4>
          <p className="action_text">{this.props.text}</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
