import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Header from '../../components/Header';
import MainPage from '../MainPage';
import OptionsPage from '../OptionsPage';
import {MAIN_PAGE, OPTIONS_PAGE} from '../../store/nav/nav';

class App extends Component {
  render() {
    let currentPage;
    if(this.props.nav === MAIN_PAGE) {
      currentPage = <MainPage />;
    }
    else if(this.props.nav === OPTIONS_PAGE) {
      currentPage = <OptionsPage />;
    }
    return (
      <div className="app">
        <Header />
        <div className="app_content">
          {currentPage}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(
  mapStateToProps,
  {}
)(App);
