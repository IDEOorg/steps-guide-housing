import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class TextInput extends Component {
  state = {
    value: this.props.value ? this.props.value : ''
  }
  handleChange = (e) => {
    this.setState({value: e.target.value}, () => {
      if(this.props.onChange) {
        console.log(this.state.value);
        this.props.onChange(this.state.value);
      }
    });
  }
  render() {
    return (
      <input className={classNames(this.props.className, "textinput")} type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
    );
  }
}
