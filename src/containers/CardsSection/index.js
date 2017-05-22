import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.less';
import Card from '../../components/Card';
import Button from '../../components/Button';
import cardsData from '../../data/cards';
import { selectCard, selectChoice } from '../../store/cards/cards';
import { generateOptions } from '../../store/selectedOptions/selectedOptions';
import { changeNav, OPTIONS_PAGE } from '../../store/nav/nav';

const CardsSection = (props) => {
  const cards = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        selected={card.selected}
        onSelect={props.onSelect}
        onChoiceSelect={card.selected ? props.onChoiceSelect : null}
        choices={cardsData[card.id].choices ? cardsData[card.id].choices : null}
        selectedChoice={card.selectedChoice ? card.selectedChoice : null}/>
    );
  });
  const selectedCards = props.cards
  .filter((card) => card.selected)
  .map((card) => {
    return {
      id: card.id,
      selectedChoice: card.selectedChoice ? card.selectedChoice : null
    };
  });
  return (
    <div className="cards_page">
      <div className="cards_section">
        {cards}
      </div>
      <div className="submit_section">
        <Button
          textStyleClass="show_options_button_text"
          className="show_options_button"
          onClick={() => props.onSubmit(selectedCards)}>
          Show me my options
        </Button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (id) => dispatch(selectCard(id)),
    onChoiceSelect: (cardId, choiceId) => dispatch(selectChoice(cardId, choiceId)),
    onSubmit: (cards) => {
      dispatch(changeNav(OPTIONS_PAGE));
      dispatch(generateOptions(cards));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsSection);

CardsSection.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.instanceOf(Card)).isRequired,
  onChoiceSelect: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

CardsSection.displayName = 'CardsSection';
