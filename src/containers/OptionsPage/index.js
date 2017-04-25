import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import Option from '../../components/Option';
import optionsData from '../../store/data/options';

class OptionsPage extends Component {
  render() {
    console.log(this.props.selectedOptions);
    const options = this.props.selectedOptions.map((id) =>
      <Option key={id} text={optionsData[id]["text"]}/>
    );
    return (
      <div className="options_page">
        <div className="options_header">
          <h2>My Options</h2>
        </div>
        <div className="options_section">
          {options}
        </div>
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
