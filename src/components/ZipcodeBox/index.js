import React, { Component } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import './index.less';

export default class ZipcodeBox extends Component {
  render() {
    return (
      <div>
        <TextInput placeholder="MY ZIP CODE"/>
        <Button>{this.props.buttonText}</Button>
      </div>
    );
  }
}
