import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class Card extends Component {
  render() {
    return (
      <div className={classNames("card", this.props.selected ? "card_selected" : "card_unselected")} onClick={() => this.props.onSelect(this.props.id)}>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}
