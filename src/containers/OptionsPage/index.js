import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { selectOption, markTried } from './actions';
import Option from '../../components/Option';
import Action from '../../components/Action';
import Link from '../../components/Link';
import optionsData from '../../store/data/options';
import { changeNav } from '../App/actions';
import { MAIN_PAGE } from '../App/constants';

class OptionsPage extends Component {
  render() {
    const currentOption = this.props.currentOption;
    const optionsWithActions = this.props.options.filter((option) => !option.tried).map((option) => {
      let id = option.id;
      let optionId = id;
      let actions = optionsData[id]["actions"].map((action) => {
        return <Action key={action.id} headline={action.headline} text={action.text} />
      });
      return {
        optionId,
        actions
      };
    });
    const options = optionsWithActions.map((optionAndAction, i) => {
      let id = optionAndAction.optionId;
      return <Option key={id} selected={id === currentOption ? true : false} order={i + 1} text={optionsData[id]["text"]} markTried={() => this.props.markTried(id)} onSelect={() => this.props.onSelect(id)}/>
    }
    );
    const actionPlans = optionsWithActions.map((optionAndAction) => {
      return (<div key={optionAndAction.optionId}>
        <div className="actions_headline_section">
          <h1 className="actions_option_headline">
            {optionsData[optionAndAction.optionId]["text"]}
          </h1>
        </div>
        {optionAndAction.actions}
      </div>);
    });
    return (
      <div className="options_page">
        <div className="options_wrapper">
          <div className="options_section3">
            <div className="options_section" >
              <div className="options_intro_section">
                <h2>What can you do?</h2>
                <Link onClick={this.props.goBack}>Back to statements</Link>
              </div>
              {options}
            </div>
          </div>
        </div>
        <div className="options_filler"></div>
        <div className="actions_section">
          {actionPlans}
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
    goBack: () => dispatch(changeNav(MAIN_PAGE)),
    onSelect: (id) => dispatch(selectOption(id)),
    markTried: (id) => dispatch(markTried(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsPage);
