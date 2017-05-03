import React, { Component } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import './index.less';

export default class ZipcodeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {inputText: ''};
  }
  render() {
    return (
      <div className="zipcode_box">
        <div className="zipcode_input_box">
          <TextInput
            className="zipcode_input"
            onChange={(value) => {this.setState({inputText: value});}}
            placeholder="MY ZIP CODE"
            value={this.state.inputText}/>
        </div>
        <Button onClick={() => {
            window.open(this.props.urlStart + this.state.inputText + this.props.urlEnd);
          }}
          textStyleClass="action_button_text"
          className="action_button">{this.props.buttonText}
        </Button>
      </div>
    );
  }
}
