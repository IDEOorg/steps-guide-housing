import React, { Component } from 'react';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header_filler"></div>
        <div className="header"></div>
      </div>
    );
  }
}
