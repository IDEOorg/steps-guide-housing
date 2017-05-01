import React, { Component } from 'react';
import './index.less';

export default class CriteriaBox extends Component {
  render() {
    const criteria = this.props.criteria.map((criterion, i) => <li key={i}>{criterion}</li>);
    return (
      <div>
        <ul>{criteria}</ul>
        {this.props.children}
      </div>
    );
  }
}
