import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { selectCard } from '../../store/cards/cards';
import { generateOptions } from '../../store/selectedOptions/selectedOptions';
import { changeNav, OPTIONS_PAGE } from '../../store/nav/nav';

class CardsSection extends Component {
  render() {
    const cards = this.props.cards.map((card) =>
      <Card key={card.id} id={card.id} text={card.text} selected={card.selected} onSelect={this.props.onSelect}/>
    );
    const cardIds = this.props.cards
    .filter((card) => card.selected)
    .map((card) => card.id);
    return (
      <div className="cards_page">
        <div className="cards_section">
          {cards}
        </div>
        <div className="submit_section">
          <Button textStyleClass="show_options_button_text" className="show_options_button" onClick={() => this.props.onSubmit(cardIds)}>
            Show me my options
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (id) => dispatch(selectCard(id)),
    onSubmit: (ids) => {
      dispatch(changeNav(OPTIONS_PAGE));
      dispatch(generateOptions(ids));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsSection);
