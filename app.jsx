const React = require('react');
const ReactDOM = require('react-dom');

const Window = require("./components/Window");

// import BuddyList from './components/buddy-list';
// import SignOn from './components/sign-on';
// import ChatWindow from './components/chat-window';

const App = () => {
  return (
    <Window>Hello</Window>
  );
}

ReactDOM.render(<App />, document.getElementById('content'));
