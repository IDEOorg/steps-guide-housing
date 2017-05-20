import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

export default class Card extends Component {
  render() {
    let choicesBox = null;
    if(this.props.choices) {
      let choices = Object.keys(this.props.choices).map((choiceId) => {
        return (
          <div key={choiceId}
            className={classNames("card_choice", choiceId === this.props.selectedChoice ? "card_choice_selected" : "card_choice_unselected")}
            onClick={() => this.props.onChoiceSelect(this.props.id, choiceId)}>
            <h6>{this.props.choices[choiceId].text}</h6>
          </div>
        );
      });
      choicesBox = (
        <div className="choices_box">
          {choices}
        </div>
      );
    }
    let cardBoxClass = null;
    let cardClass = null;
    if(this.props.selected) {
      cardBoxClass = "card_selected";
      if(this.props.choices) {
        cardClass = "card_with_choices";
      }
    }
    else {
      cardBoxClass = "card_unselected";
    }

    return (
      <div className={classNames("card_box", cardBoxClass)}>
        <div className={classNames("card", cardClass)}
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
  onChoiceSelect: PropTypes.func,
  selectedChoice: PropTypes.string,
  choices: PropTypes.objectOf(PropTypes.objectOf(PropTypes.shape({
    text: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
  })))
};

Card.displayName = 'Card';
