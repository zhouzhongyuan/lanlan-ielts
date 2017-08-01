import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Audiotrack';
import getPhonetic from './Phonetic/getPhonetic';

class ListItemCustom extends Component {
  constructor(props) {
    super(props);
        // this.speak = this.speak.bind(this);
    this.state = {
      phonetic: '',
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.hasPhonetic && !this.state.phonetic) {
      const word = this.props.enWord;
      // console.log(word);
      // const r = await getPhonetic(word);
      getPhonetic(word)
        .then((r) => {
          let phonetic;
          try {
            phonetic = r.basic.phonetic;
          } catch (e) {
            console.log('no phonetic');
          }
          if (!phonetic) {
            phonetic = '未获得';
          }
          this.setState({
            phonetic,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState.phonetic, this.state.phonetic);
    return !(
      nextState.phonetic === this.state.phonetic &&
      this.state.phonetic &&
        this.props.hasPhonetic === nextProps.hasPhonetic &&
        this.props.hasChinese === nextProps.hasChinese
    );
  }
  render() {
    console.log('Last hasPhonetic',this.props.hasPhonetic);
    return (
      <ListItem dense button key={this.props.enWord}>
        <ListItemText
          primary={`${this.props.enWord}`}
          style={{
            textAlign: 'left',
            maxWidth: 200,
          }}
        />
        {this.props.hasChinese &&
        <ListItemText
          primary={`${this.props.value}`}
          style={{
            textAlign: 'left',
            maxWidth: 200,
          }}
        />}
        {this.props.hasPhonetic && <ListItemText
          primary={this.state.phonetic}
          style={{
            textAlign: 'left',
            maxWidth: 200,
          }}
        />}
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Audiotrack"
            onClick={() => this.props.speak(this.props.enWord)}
          >
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

ListItemCustom.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default ListItemCustom;
