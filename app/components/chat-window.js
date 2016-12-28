import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import MenuBar from './menu-bar';
import {DropDown, DropDownItem} from './input/dropdown';
import Well from './well';

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
        <div>
          <Well>
            <p>Hello</p>
            <ol>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ol>
          </Well>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({

});

export default ChatWindow;
