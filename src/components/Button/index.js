import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

export default class Button extends Component {
  render() {
    return (
      <div className={classNames("button", this.props.className)} onClick={this.props.onClick}>
        <h4 className={classNames("button_text", this.props.textStyleClass)}>
          {this.props.children}
        </h4>
      </div>
    );
  }
}

Button.propTypes = {
  textStyleClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.element
};
