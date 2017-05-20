import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

export default class Link extends Component {
  render() {
    return (
      <a className={classNames("link", this.props.className)} onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </a>
    );
  }
}

Link.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

Link.displayName = 'Link';
