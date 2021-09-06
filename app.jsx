import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Window from "./components/Window";

import Checker from "./components/Checker";
import BuddyList from './components/BuddyList';
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
        <Router basename="/">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/buddies" component={BuddyList} />
            <Route path="*" component={Checker} />
          </Switch>
        </Router>
      </Window>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
