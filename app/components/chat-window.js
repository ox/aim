import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import MenuBar from './menu-bar';
import {DropDown, DropDownItem} from './input/dropdown';
import Well from './well';
import Textarea from './input/textarea';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {id: 1, from: 'artem', to: 'cole', message: 'hey'},
        {id: 2, from: 'cole', to: 'artem', message: 'sup dag'},
        {id: 3, from: 'artem', to: 'cole', message: 'nm'},
        {id: 4, from: 'artem', to: 'cole', message: 'u?'},
      ],
    };
  }
  render() {
    return (
      <div>
        <hr/>
        <div className={css(styles.messagesContainer)}>
          <Well styles={[styles.messagesWell]}>
            <p>Hello</p>
            <ol>
              {[...Array(50).keys()].map((i) => <li>{i}</li>)}
            </ol>
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
});

export default ChatWindow;
