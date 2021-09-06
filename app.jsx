import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from "./theme";
import Window from "./components/Window";

// import BuddyList from './components/buddy-list';
import SignIn from './components/SignIn';
// import ChatWindow from './components/chat-window';

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
