import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

import MenuBar from './menu-bar';
import {DropDown, DropDownItem} from './dropdown';
import Button from './button';
import Well from './well';
import Textarea from './textarea';
import {Group, GroupDivider} from './input-group';

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
          <Textarea />
          <Group>
            <GroupDivider styles={[styles.left]}>
              <Button type="flat" styles={[styles.button, styles.warnButton]} />
              <Button type="flat" styles={[styles.button, styles.blockButton]} />
            </GroupDivider>
            <GroupDivider>
              <Button type="flat" styles={[styles.button, styles.talkButton]} />
              <Button type="flat" styles={[styles.button, styles.infoButton]} />
            </GroupDivider>
            <GroupDivider styles={[styles.right]}>
              <Button type="flat" styles={[styles.button, styles.sendButton]} />
            </GroupDivider>
          </Group>
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
  left: {
    float: 'left',
  },
  right: {
    float: 'right',
  },
  button: {
    width: 36,
    height: 36,
  },
  warnButton: {
    backgroundImage: 'url(public/img/warn.png)',
  },
  blockButton: {
    backgroundImage: 'url(public/img/block.png)',
  },
  talkButton: {
    backgroundImage: 'url(public/img/talk.png)',
  },
  infoButton: {
    backgroundImage: 'url(public/img/info.png)',
  },
  sendButton: {
    backgroundImage: 'url(public/img/send.png)',
  },
});

export default ChatWindow;
