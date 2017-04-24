import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Card from '../../components/Card';

class CardsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const cards = this.props.cards.map((card) =>
      <Card key={card.id} text={card.text} selected={card.selected}/>
    );
    return (
      <div className="cards_page">
        <div className="cards_header">
          <h2>I Can't Pay My Rent</h2>
          <h4>There are still options to explore when you can't pay rent now.</h4>
          <h4>To get started, choose all the statements that apply to you:</h4>
        </div>
        <div className="cards_section">
          {cards}
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

export default connect(
  mapStateToProps,
  {}
)(CardsPage);
