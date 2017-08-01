import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import H1 from '../H1';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/word">
            <FormattedMessage {...messages.word} />
          </HeaderLink>
        </NavBar>
       {/* <H1>
          IELTSPractice:<br />
        </H1>
        <NavBar>
          <HeaderLink to="/word/04">
            IELTS 04
          </HeaderLink>
          <HeaderLink to="/word/05">
            IELTS 05
          </HeaderLink>
          <HeaderLink to="/word/06">
            IELTS 06
          </HeaderLink>
          <HeaderLink to="/word/07">
            IELTS 07
          </HeaderLink>
          <HeaderLink to="/word/08">
            IELTS 08
          </HeaderLink>
          <HeaderLink to="/word/09">
            IELTS 09
          </HeaderLink>
          <HeaderLink to="/word/10">
            IELTS 10
          </HeaderLink>
          <HeaderLink to="/word/11">
            IELTS 11
          </HeaderLink>
        </NavBar>


        <H1>
            Test:<br />
        </H1>
        <NavBar>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/1`}>
              test 1
          </HeaderLink>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/2`}>
            test 2
          </HeaderLink>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/3`}>
            test 3
          </HeaderLink>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/4`}>
            test 4
          </HeaderLink>
        </NavBar>

        <H1>
          Pessage:<br />
        </H1>
        <NavBar>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/${this.state.IELTSTest}/1`}>
            test 1
          </HeaderLink>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/${this.state.IELTSTest}/2`}>
            test 2
          </HeaderLink>
          <HeaderLink to={`/word/${this.state.IELTSPractice}/${this.state.IELTSTest}/3`}>
            test 3
          </HeaderLink>
        </NavBar>
*/}

      </div>
    );
  }
}

export default Header;
