import React, { Component } from 'react';
import './index.less';

export default class Card extends Component {
  render() {
    let styles = {
      boxShadow: '0 0 6px 1px rgba(70,70,70,0.15)'
    };
    let textStyle = {
      color: 'rgba(84,133,249,0.7)'
    };
    if(this.props.selected) {
      styles = {
        boxShadow: '0 0 6px 1px rgba(84,133,249,0.4)'
      };
      textStyle = {
        color: 'rgb(84,133,249)'
      };
    }
    return (
      <div className="card" style={styles} onClick={() => this.props.onSelect(this.props.id)}>
        <h2 style={textStyle}>{this.props.text}</h2>
      </div>
    );
  }
}
