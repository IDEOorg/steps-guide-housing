import React, { Component } from 'react';
import './index.less';
import Header from '../../components/Header';
import MainPage from '../MainPage';

export default class App extends Component {
  render() {
    let currentPage = <MainPage />;
    return (
      <div className="app">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
