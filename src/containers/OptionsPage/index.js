import React, { Component } from 'react';
import './index.less';
import Option from '../../components/Option';

const numbers = [1,2,3,4];
const options = numbers.map((number) =>
  <Option key={number} />
);

export default class OptionsPage extends Component {
  render() {
    return (
      <div className="options_page">
        <div className="options_header">
          <h2>My Options</h2>
        </div>
        <div className="options_section">
          {options}
        </div>
      </div>
    );
  }
}
