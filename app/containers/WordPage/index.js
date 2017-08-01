/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import List from './List';
import Selection from './Selection';
import SelectionMenu from './SelectionMenu/SelectionMenu';
import H1 from 'components/H1';
import messages from './messages';
import { withRouter } from 'react-router';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { OrderedMap } from 'immutable';
const theme = createMuiTheme({
  status: {
    danger: 'orange',
  },
});
class WordPage extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.updateWordList = this.updateWordList.bind(this);
    this.handlePracticeClick = this.handlePracticeClick.bind(this);
    this.handleTestClick = this.handleTestClick.bind(this);
    this.handlePessageClick = this.handlePessageClick.bind(this);
    this.state = {
      wordList: OrderedMap({}),
      hasChinese: false,
      hasPhonetic: false,
      hasSpeaker: false,
      IELTSPractice: '4',
      IELTSTest: '1',
      IELTSPessage: '1',
    };
  }
  handlePracticeClick(v) {
    const { IELTSPractice, IELTSTest, IELTSPessage } = this.state;
    const practice = v.toString().length === 1 ? `0${v}` : v;
    console.log('practice')
    console.log(practice)
    const path = `/word/${practice}/${IELTSTest}/${IELTSPessage}`;
    this.props.router.push(path);
    this.setState({
      IELTSPractice: practice,
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
  }
  updateWordList() {
    const { practice, test, pessage } = this.props.params;
    const { IELTSPractice, IELTSTest, IELTSPessage } = this.state;
    // console.log(this.props.params);
    console.log('get json::::', `./data/${practice}-${test}-${pessage}.json`);
    import(`./data/${IELTSPractice}-${IELTSTest}-${IELTSPessage}.json`)
    // import(`./data/${practice}-${test}-${pessage}.json`)
      .then((r) => {
        const wordList = OrderedMap(r);
        this.setState({
          wordList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    console.log('did mount')
    this.updateWordList();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('did update')
    this.updateWordList();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(nextState.hasPhonetic, this.state.hasPhonetic);
    return !(
      nextState.wordList.equals(this.state.wordList) &&
      nextState.IELTSPractice === this.state.IELTSPractice &&
      nextState.IELTSTest === this.state.IELTSTest &&
      nextState.IELTSPessage === this.state.IELTSPessage &&
      nextState.hasChinese === this.state.hasChinese &&
      nextState.hasPhonetic === this.state.hasPhonetic &&
      nextState.hasSpeaker === this.state.hasSpeaker
    );
  }
  changeState(key, value) {

    console.log('changeState:');
    console.log(key, value);
    switch (key) {
      case 'hasChinese':
        this.setState({ hasChinese: value });
        break;
      case 'hasPhonetic':
        this.setState({ hasPhonetic: value });
        break;
      case 'hasSpeaker':
        this.setState({ hasSpeaker: value });
        break;
    }
  }
  componentWillMount() {
    const { practice, test, pessage } = this.props.params;
    this.setState({
      IELTSPractice: practice,
      IELTSTest: test,
      IELTSPessage: pessage,
    });
  }
  componentWillUpdate() {
    console.log('will update');
  }
  render() {
    const { practice, test, pessage } = this.props.params;
    const wordList = this.state.wordList.toObject();
    console.log(this.state.hasChinese,this.state.hasPhonetic);
    return (
      <article>
        <H1>
          IELTS {practice}<br /> Test {test}, Pessage {pessage}
        </H1>
        <MuiThemeProvider
          theme={theme}
        >
          <div>
            <SelectionMenu
              IELTSPractice={this.state.IELTSPractice || '4'}
              IELTSTest={this.state.IELTSTest || '1'}
              IELTSPessage={this.state.IELTSPessage || '1'}
              handlePracticeClick={this.handlePracticeClick}
              handleTestClick={this.handleTestClick}
              handlePessageClick={this.handlePessageClick}
            />
            <Selection
              hasChinese={this.state.hasChinese}
              hasPhonetic={this.state.hasPhonetic}
              hasSpeaker={this.state.hasSpeaker}
              changeState={this.changeState}
            />
            <List
              wordList={wordList}
              hasChinese={this.state.hasChinese}
              hasPhonetic={this.state.hasPhonetic}
              hasSpeaker={this.state.hasSpeaker}
            />
          </div>
        </MuiThemeProvider>
      </article>
    );
  }
}
export default withRouter(WordPage);
