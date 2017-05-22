import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.less';
import Header from '../../components/Header';
import MainPage from '../MainPage';
import OptionsPage from '../OptionsPage';
import {MAIN_PAGE, OPTIONS_PAGE} from '../../store/nav/nav';

const App = (props) => {
  let currentPage;
  if(props.nav === MAIN_PAGE) {
    currentPage = <MainPage />;
  }
  else if(props.nav === OPTIONS_PAGE) {
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
};

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}

export default connect(
  mapStateToProps,
  {}
)(App);

App.propTypes = {
  nav: PropTypes.string.isRequired
};

App.displayName = 'App';
