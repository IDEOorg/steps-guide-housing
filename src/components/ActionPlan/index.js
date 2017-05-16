import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from '../Action';
import Button from '../Button';
import ZipcodeBox from '../ZipcodeBox';
import CriteriaBox from '../CriteriaBox';
import classNames from 'classnames';
import './index.less';
const urlImg = require('../../assets/url-icon.svg');

export default class ActionPlan extends Component {
  render() {
    let actionItem;
    let actions = this.props.actions.map((action) => {
      if(action.link) {
        actionItem = (
          <Button
            onClick={() => { window.open(action.link.url); }}
            textStyleClass="action_button_text"
            className="action_button">
          <img className="action_img" src={urlImg} />
          {action.link.text}
        </Button>);
      }
      else if(action.criteria) {
        actionItem = (<CriteriaBox criteria={action.criteria.criteria}>
          <Button
            onClick={() => { window.open(action.criteria.link.url); }}
            textStyleClass="action_button_text"
            className="action_button">
            <img className="action_img" src={urlImg} />
            {action.criteria.link.text}
          </Button>
        </CriteriaBox>);
      }
      else if(action.zipcode) {
        actionItem = (<ZipcodeBox
          urlStart={action.zipcode.link.urlTemplateStart}
          urlEnd={action.zipcode.link.urlTemplateEnd}
          buttonText={action.zipcode.link.text}/>);
      }
      return (<Action key={action.id}
          img={require('../../assets/' + action.img)}
          headline={action.headline}
          text={action.text}>
          {actionItem}
        </Action>);
    });
    return (
      <div className={classNames("action_plan", this.props.isCurrentOption ? "" : "inactive_action")}
        data-option={this.props.id}>
        <div className="actions_headline_section">
          <h1 className="actions_option_headline">
            {this.props.headline}
          </h1>
        </div>
        {actions}
      </div>
    );
  }
}

ActionPlan.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    headline: PropTypes.string,
    text: PropTypes.string
  })),
  headline: PropTypes.string,
  id: PropTypes.string,
  isCurrentOption: PropTypes.bool
};
