import React, { Component } from 'react';
import './index.less';

export default class Card extends Component {
  render() {
    let styles = {
      boxShadow: '0 0 4px 3px rgba(230,230,230,0.2)'
    };
    let textStyle = {
      color: 'rgba(84,133,249,0.67)'
    };
    if(this.props.selected) {
      styles = {
        boxShadow: '0 0 4px 3px rgba(84,133,249,0.2)'
      };
      textStyle = {
        color: 'rgb(84,133,249)'
      };
    }
    return (
      <div className="card" style={styles} onClick={() => this.props.onSelect(this.props.id)}>
        <h4 style={textStyle}>{this.props.text}</h4>
      </div>
    );
  }
}
