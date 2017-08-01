import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PracticeSelectionMenu from './PracticeSelectionMenu';
import TestSelectionMenu from './TestSelectionMenu';
import PessageSelectionMenu from './PessageSelectionMenu';


class SelectionMenu extends Component {
  constructor(props) {
    super(props);
    // this.handlePracticeClick = this.handlePracticeClick.bind(this);
    // this.handleTestClick = this.handleTestClick.bind(this);
    // this.handlePessageClick = this.handlePessageClick.bind(this);
    // this.state = {
    //   IELTSPractice: '04',
    //   IELTSTest: '1',
    //   IELTSPessage: '1',
    // };
  }
/*  handlePracticeClick(v) {
    const { IELTSPractice, IELTSTest, IELTSPessage } = this.state;
    const path = `/word/${v}/${IELTSTest}/${IELTSPessage}`;
    this.props.router.push(path);
    this.setState({
      IELTSPractice: v,
    });
  }
  handleTestClick(v) {
    const { IELTSPractice, IELTSTest, IELTSPessage } = this.state;
    const path = `/word/${IELTSPractice}/${v}/${IELTSPessage}`;
    this.props.router.push(path);
    this.setState({
      IELTSTest: v,
    });
  }
  handlePessageClick(v) {
    const { IELTSPractice, IELTSTest, IELTSPessage } = this.state;
    const path = `/word/${IELTSPractice}/${IELTSTest}/${v}`;
    this.props.router.push(path);
    this.setState({
      IELTSPessage: v,
    });
  }*/
  render() {
    console.log();
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <PracticeSelectionMenu
          handlePracticeClick={this.props.handlePracticeClick}
          selectedIndex={Number(this.props.IELTSPractice) - 4}
        />
        <TestSelectionMenu
          handleTestClick={this.props.handleTestClick}
          selectedIndex={Number(this.props.IELTSTest) - 1}
        />
        <PessageSelectionMenu
          handlePessageClick={this.props.handlePessageClick}
          selectedIndex={Number(this.props.IELTSPessage) - 1}
        />
      </div>
    );
  }
}

export default withRouter(SelectionMenu);
