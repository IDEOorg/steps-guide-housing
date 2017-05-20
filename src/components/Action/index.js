import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class Action extends Component {
  render() {
    return (
      <div className="action">
        <div className="action_capsule">
          <div className="action_img">
            <img src={this.props.img}/>
          </div>
          <div className="action_content">
            <h3 className="action_headline">{this.props.headline}</h3>
            <p className="action_text">{this.props.text}</p>
          </div>
        </div>
        <div className="action_form">
          <div className="action_form_box">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Action.propTypes = {
  img: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element
};

Action.displayName = 'Action';
