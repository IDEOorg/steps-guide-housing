import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class ActionPlan extends Component {
  render() {
    return (
      <div className={classNames("action_plan", this.props.isCurrentOption ? "" : "inactive_action")}
        data-option={this.props.id}>
        <div className="actions_headline_section">
          <h1 className="actions_option_headline">
            {this.props.headline}
          </h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}
