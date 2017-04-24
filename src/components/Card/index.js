import React, { Component } from 'react';
import './index.less';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}
