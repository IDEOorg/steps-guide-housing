import React, { Component } from 'react';
import './index.less';
import Header from '../../components/Header';
import MainPage from '../MainPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainPage />
      </div>
    );
  }
}
