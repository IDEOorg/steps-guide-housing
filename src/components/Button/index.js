import React, { Component } from 'react';
import './index.less';

export default class Button extends Component {
  render() {
    const styles = {
      height: '80px',
      width: '80%'
    }
    return (
      <div className="button" style={styles} onClick={this.props.onClick}>
        <h4 className="button_text">{this.props.text}</h4>
      </div>
    );
  }
}
