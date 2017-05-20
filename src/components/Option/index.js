import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';
import Link from '../Link';

export default class Option extends Component {
  render() {
    let orderBox = null;
    if(this.props.order !== undefined) {
      orderBox = (
        <div className="order_tag">
          <p>{this.props.order}</p>
        </div>
      );
    }
    let link = null;
    if(this.props.linkText) {
      link = (
        <Link className="option_tried_link" onClick={(e) => {this.props.onLinkClick(); e.stopPropagation();}}>{this.props.linkText}</Link>
      );
    }
    return (
      <div className={classNames("option", this.props.selected ? "selected_option" : null)} style={this.props.styles} onClick={this.props.onSelect}>
        <div className="option_container">
          {orderBox}
          <h2 className="option_headline"
            style={this.props.textStyles}>
            {this.props.text}
          </h2>
          {link}
        </div>
      </div>
    );
  }
}

Option.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  order: PropTypes.number,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  textStyles: PropTypes.object,
  styles: PropTypes.object,
  onLinkClick: PropTypes.func.isRequired,
};

Option.displayName = 'Option';
