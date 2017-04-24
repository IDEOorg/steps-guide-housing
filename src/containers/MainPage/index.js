import React, { Component } from 'react';
import './index.less';
import CardsPage from '../CardsPage';
import OptionsPage from '../OptionsPage';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main_page">
        <CardsPage />
        <OptionsPage />
      </div>
    );
  }
}
