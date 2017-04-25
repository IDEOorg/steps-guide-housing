import React, { Component } from 'react';
import './index.less';

export default class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card" onClick={() => this.props.onSelect(this.props.id)}>
        <h4>{this.props.text}</h4>
        <h4>{this.props.selected.toString()}</h4>
      </div>
    );
  }
}
