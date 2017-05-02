import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { selectOption, markTried, toggleOption } from './actions';
import Option from '../../components/Option';
import Action from '../../components/Action';
import ActionPlan from '../../components/ActionPlan';
import Button from '../../components/Button';
import Link from '../../components/Link';
import ZipcodeBox from '../../components/ZipcodeBox';
import CriteriaBox from '../../components/CriteriaBox';
import optionsData from '../../store/data/options';
import { changeNav } from '../App/actions';
import { MAIN_PAGE } from '../App/constants';

class OptionsPage extends Component {
  constructor(props){
     super(props);
  }
  onScroll() {
    let actionPlans = this.actionSection.children;
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let currentOptionHeight = -1;
    let currentOption = null;
    for(let i = 0; i < actionPlans.length; i++) {
      console.log(actionPlans[i]);
      let actionPlanHeight = actionPlans[i].getBoundingClientRect().top;
      console.log(actionPlanHeight);
      if(actionPlanHeight >= 0 && actionPlanHeight <= (height / 4) && actionPlanHeight > currentOptionHeight) {
        currentOptionHeight = actionPlanHeight;
        currentOption = actionPlans[i].dataset.option;
      }
    }
    if(currentOption !== null && currentOption !== this.props.currentOption) {
      this.props.toggleOption(currentOption);
    }
  }
  onOptionSelect(id) {
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if(id !== this.props.currentOption) {
      let actionPlans = this.actionSection.children;
      for(let i = 0; i < actionPlans.length; i++) {
        if(actionPlans[i].dataset.option === id) {
          this.actionSection.scrollTop += actionPlans[i].getBoundingClientRect().top - height / 4;
          return;
        }
      }
    }
  }
  render() {
    const currentOption = this.props.currentOption;
    const optionsWithActions = this.props.options.filter((option) => !option.tried).map((option) => {
      let id = option.id;
      let optionId = id;
      let actions = optionsData[id]["actions"].map((action) => {
        let actionItem;
        if(action.link) {
          actionItem = (<Button onClick={() => { window.open(action.link.url); }} textStyleClass="action_button_text" className="action_button">
            {action.link.text}
          </Button>);
        }
        else if(action.criteria) {
          actionItem = (<CriteriaBox criteria={action.criteria.criteria}>
            <Button onClick={() => { window.open(action.criteria.link.url); }} textStyleClass="action_button_text" className="action_button">
              {action.criteria.link.text}
            </Button>
          </CriteriaBox>);
        }
        else if(action.zipcode) {
          actionItem = (<ZipcodeBox
            urlStart={action.zipcode.link.urlTemplateStart}
            urlEnd={action.zipcode.link.urlTemplateEnd}
            buttonText={action.zipcode.link.text}/>);
        }
        return (<Action key={action.id} img={require('../../assets/' + action.img)} headline={action.headline} text={action.text}>
        {actionItem}
      </Action>);
      });
      return {
        optionId,
        actions
      };
    });
    const options = optionsWithActions.map((optionAndAction, i) => {
      let id = optionAndAction.optionId;
      return <Option key={id}
        selected={id === currentOption}
        order={i + 1} text={optionsData[id]["text"]}
        markTried={() => {}}
        onSelect={() => {this.onOptionSelect(id); this.props.onSelect(id);}}/>;
    }
    );
    const actionPlans = optionsWithActions.map((optionAndAction) => {
      return (
        <ActionPlan
          key={optionAndAction.optionId}
          id={optionAndAction.optionId}
          isCurrentOption={currentOption === optionAndAction.optionId}
          headline={optionsData[optionAndAction.optionId]["text"]}>
          {optionAndAction.actions}
        </ActionPlan>);
    });
    return (
      <div className="options_page">
        <div className="options_section" >
          <div className="options_intro_section">
            <h1 className="options_intro_headline">What can you do?</h1>
            <Link className="options_intro_back" onClick={this.props.goBack}>Back to statements</Link>
          </div>
          {options}
        </div>
        <div className="options_filler"></div>
        <div className="actions_section" ref={(actionSection) => {this.actionSection = actionSection;}} onScroll={() => {this.onScroll();}}>
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
    markTried: (id) => dispatch(markTried(id)),
    toggleOption: (id) => dispatch(toggleOption(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsPage);
