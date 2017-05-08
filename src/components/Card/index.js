import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

export default class Card extends Component {
  render() {
    let choicesBox = null;
    if(this.props.choices) {
      let choices = this.props.choices.map((choice, i) => {
        return (
          <div key={i} className="card_choice">
            <h6>{choice}</h6>
          </div>
        );
      });
      choicesBox = (
        <div className="choices_box">
          {choices}
        </div>
      );
    }
    return (
      <div className={classNames("card_box", this.props.selected ? "card_selected" : "card_unselected")}>
        <div className={"card"}
          style={{minHeight: '9.1em'}}
          onClick={() => this.props.onSelect(this.props.id)}>
          <h2>{this.props.text}</h2>
        </div>
        {choicesBox}
      </div>
    );
  }
}

Card.propTypes = {
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string)
};
