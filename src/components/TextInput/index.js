import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class TextInput extends Component {
  render() {
    return (
      <a className={classNames("link", this.props.className ? this.props.className : '')} onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </a>
    );
  }
}
