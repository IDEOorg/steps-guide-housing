import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { selectOption } from './actions';
import Option from '../../components/Option';
import Link from '../../components/Link';
import optionsData from '../../store/data/options';

class OptionsPage extends Component {
  render() {
    const currentOption = this.props.currentOption;
    const options = this.props.options.map((id, i) => {
      return <Option key={id} selected={id === currentOption ? true : false} order={i + 1} text={optionsData[id]["text"]} onSelect={() => this.props.onSelect(id)}/>
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
    options: state.selectedOptions.options,
    currentOption: state.selectedOptions.currentOption
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
