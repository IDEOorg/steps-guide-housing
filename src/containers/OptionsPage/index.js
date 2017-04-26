import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { selectOption } from './actions';
import Option from '../../components/Option';
import Link from '../../components/Link';
import optionsData from '../../store/data/options';

class OptionsPage extends Component {
  render() {
    const options = this.props.selectedOptions.map((option, i) => {
      return <Option key={option.id} selected={option.selected} order={i + 1} text={optionsData[option.id]["text"]} onSelect={() => this.props.onSelect(option.id)}/>  
    }
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
        <div className="actions_section">
          <p>Cool</p>
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

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (id) => dispatch(selectOption(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsPage);
