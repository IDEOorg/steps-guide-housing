import React, { Component } from 'react';
import './index.less';

export default class Link extends Component {
  render() {
    const styles = {
      textDecoration: 'underline',
      color: 'rgb(201,201,201)'
    }
    return (
      <a className="link" style={styles} onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </a>
    );
  }
}
