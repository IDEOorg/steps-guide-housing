import React, { Component } from 'react';
import './index.less';

export default class TextInput extends Component {
  render() {
    return (
      <input className="textinput" type="text" name="LastName" placeholder={this.props.placeholder} />
    );
  }
}
