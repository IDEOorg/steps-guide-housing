import React, { Component } from 'react';
import Button from '../Button';
//import TextInput from '../TextInput';
import './index.less';

export default class ZipcodeBox extends Component {
  render() {
    return (
      <div>
        <Button>{this.props.buttonText}</Button>
      </div>
    );
  }
}
