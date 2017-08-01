import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List from 'material-ui/List';
import ListItemCustom from './ListItemCustom';
import WordAudio from './WordAudio';


const styleSheet = createStyleSheet('CheckboxList', (theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: theme.palette.background.paper,
  },
}));

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.speak = this.speak.bind(this);
    this.state = {
      audio: '',
    };
  }
  state = {
    checked: [0],
  };

  speak(key) {
    // console.log(key);
    this.setState({
      audio: `http://dict.youdao.com/dictvoice?audio=${key}`,
    });
  }
  render() {
    const classes = this.props.classes;
    const allListItem = [];
    for (const [enWord, value] of Object.entries(this.props.wordList)) {
      allListItem.push(
        <ListItemCustom
          enWord={enWord}
          value={value}
          hasChinese={this.props.hasChinese}
          hasPhonetic={this.props.hasPhonetic}
          hasSpeaker={this.props.hasSpeaker}
          speak={this.speak}
        />,
            );
    }
    return (
      <div className={classes.root}>
        <List>
          {allListItem}
        </List>
        <WordAudio
          audioSrc={this.state.audio}
        />
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CheckboxList);
