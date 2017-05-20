import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class CriteriaBox extends Component {
  render() {
    const criteria = this.props.criteria.map((criterion, i) => <li key={i}>{criterion}</li>);
    return (
      <div className="criteria_box">
        <div className="criteria_section">
          <h5 className="criteria_tag">GENERAL CRITERIA</h5>
          <ul className="criteria_list">{criteria}</ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

CriteriaBox.propTypes = {
  criteria: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired
};

CriteriaBox.displayName = 'CriteriaBox';
