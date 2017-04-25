import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Option from '../../components/Option';
import Link from '../../components/Link';
import optionsData from '../../store/data/options';

class OptionsPage extends Component {
  render() {
    const options = this.props.selectedOptions.map((id, i) =>
      <Option key={id} order={i + 1} text={optionsData[id]["text"]}/>
    );
    return (
      <div className="options_page">
        <div className="options_section">
          <div className="options_intro_section">
            <h2>What can you do?</h2>
            <Link>Back to statements</Link>
          </div>
          {options}
        </div>
        <div className="actions_section"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedOptions: state.selectedOptions
  };
}

export default connect(
  mapStateToProps,
  {}
)(OptionsPage);
