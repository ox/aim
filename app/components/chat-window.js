import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import MenuBar from './menu-bar';
import {DropDown, DropDownItem} from './dropdown';
import Well from './well';
import Textarea from './textarea';

const ChatLine = ({id, from, message, color}) => {
  return (
    <p className={css(styles.chatLine)}>
      <span style={{color}} className={css(styles.chatSender)}>{from}</span>: {message}
    </p>
  );
};

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {from: 'artem', color: 'red', message: 'hey'},
        {from: 'cole', color: 'blue', message: 'sup dag'},
        {from: 'artem', color: 'red', message: 'Not much, how about you?'},
        {from: 'artem', color: 'red', message: 'yooooo'},
        {from: 'artem', color: 'red', message: 'hey'},
        {from: 'cole', color: 'blue', message: 'sup dag'},
        {from: 'artem', color: 'red', message: 'Not much, how about you?'},
        {from: 'artem', color: 'red', message: 'yooooo'},
        {from: 'artem', color: 'red', message: 'hey'},
        {from: 'cole', color: 'blue', message: 'sup dag'},
        {from: 'artem', color: 'red', message: 'Not much, how about you?'},
        {from: 'artem', color: 'red', message: 'yooooo'},
        {from: 'artem', color: 'red', message: 'hey'},
        {from: 'cole', color: 'blue', message: 'sup dag'},
        {from: 'artem', color: 'red', message: 'Not much, how about you?'},
        {from: 'artem', color: 'red', message: 'yooooo'},
      ],
    };
  }
  render() {
    return (
      <div>
        <hr/>
        <div className={css(styles.messagesContainer)}>
          <Well styles={[styles.messagesWell]}>
            {this.state.messages.map(ChatLine)}
          </Well>
          <div></div>
          <Textarea />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  messagesContainer: {
    padding: 4,
  },
  messagesWell: {
    minHeight: 130,
    maxHeight: 130,
    overflow: 'scroll',
  },
  chatLine: {
    fontFamily: 'Times New Roman, serif',
    fontSize: 16,
  },
  chatSender: {
    fontFamily: 'Times New Roman, serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatWindow;
