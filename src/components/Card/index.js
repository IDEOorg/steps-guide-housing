import React, { Component } from 'react';
import classNames from 'classnames';
import './index.less';

export default class Card extends Component {
  render() {
    return (
      <div className="card_box">
        <div className={classNames("card", this.props.selected ? "card_selected" : "card_unselected")} onClick={() => this.props.onSelect(this.props.id)}>
          <h2>{this.props.text}</h2>
        </div>
        <div>
          <h4>Just once?</h4>
          <h4>Twice or more?</h4>
        </div>
      </div>
    );
  }
}
