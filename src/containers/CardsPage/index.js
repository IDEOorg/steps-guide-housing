import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { generateOptions, selectCard } from './actions';
import { changeNav } from '../App/actions';
import { OPTIONS_PAGE } from '../App/constants';

class CardsPage extends Component {
  constructor(props) {
    super(props);
  }
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
        <Button text="Show me my options" onClick={() => this.props.onSubmit(cardIds)}/>
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
)(CardsPage);
