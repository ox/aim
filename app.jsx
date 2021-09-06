import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Window from "./components/Window";

// import BuddyList from './components/buddy-list';
import SignIn from './components/SignIn';
// import ChatWindow from './components/chat-window';

const theme = {
  colors: {
    beige: '#D2CFC9',
    grayLight: '#dfdfdf',
    grayMedium: '#929292',
    grayDark: 'gray',
  },
  space: [],
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Window>
        <SignIn />
      </Window>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
