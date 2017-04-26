import React, { Component } from 'react';
import './index.less';
import Link from '../Link';

export default class Option extends Component {
  render() {
    let optionStyles;
    if(this.props.selected) {
      optionStyles = {
        background: 'green'
      };
    }
    return (
      <div className="option" style={optionStyles} onClick={this.props.onSelect}>
        <div className="option_container">
          <div className="order_tag">
            <p>{this.props.order}</p>
          </div>
          <h4 className="option_headline">{this.props.text}</h4>
          <Link>I've already tried this.</Link>
        </div>
      </div>
    );
  }
}
